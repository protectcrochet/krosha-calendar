import Link from "next/link";
import { endOfMonth, format, startOfMonth } from "date-fns";
import { es } from "date-fns/locale";
import { ESTADO_COLORS } from "@/lib/constants";
import { listPedidos } from "@/lib/pedidos";

export default async function CalendarioPage({ searchParams }: { searchParams: Promise<{ mes?: string }> }) {
  const { mes } = await searchParams;
  const base = mes ? new Date(`${mes}-01`) : new Date();
  const ym = format(base, "yyyy-MM");
  const pedidos = await listPedidos({ mes: ym });

  const days = Array.from({ length: endOfMonth(base).getDate() }, (_, i) => i + 1);

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Calendario de entregas · {format(startOfMonth(base), "MMMM yyyy", { locale: es })}</h2>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
        {days.map((day) => {
          const date = `${ym}-${String(day).padStart(2, "0")}`;
          const events = pedidos.filter((p) => p.fecha_entrega === date);
          return (
            <div key={day} className="rounded-xl bg-white border border-rose/10 p-2 min-h-32">
              <Link href={`/pedidos/nuevo?fecha=${date}`} className="font-semibold text-sm">{day}</Link>
              <div className="mt-2 space-y-1">
                {events.map((e) => (
                  <Link key={e.id} href={`/pedidos/${e.id}`} className={`block rounded-lg px-2 py-1 text-xs ${ESTADO_COLORS[e.estado_produccion]}`}>
                    {e.cliente} · {e.titulo_ramo} · {e.tamano} · ${Number(e.pendiente).toFixed(0)}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
