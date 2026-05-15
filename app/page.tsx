import Link from "next/link";
import { Card, Section } from "@/components/ui";
import { computeDashboard, listPedidos } from "@/lib/pedidos";

export default async function DashboardPage() {
  const pedidos = await listPedidos();
  const kpi = computeDashboard(pedidos);

  return (
    <div className="space-y-6">
      <Section title="Dashboard">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Card title="Pedidos del mes" value={String(kpi.pedidosMes)} />
          <Card title="Pedidos esta semana" value={String(kpi.pedidosSemana)} />
          <Card title="Entregas próximas" value={String(kpi.entregasProximas)} />
          <Card title="Anticipos recibidos" value={`$${kpi.anticipos.toFixed(2)}`} />
          <Card title="Pendiente por cobrar" value={`$${kpi.pendiente.toFixed(2)}`} />
          <Card title="Pedidos urgentes" value={String(kpi.urgentes)} />
        </div>
      </Section>
      <Section title="Próximas entregas">
        <div className="rounded-2xl bg-white p-4 border border-rose/10">
          {pedidos.slice(0, 8).map((p) => (
            <Link key={p.id} href={`/pedidos/${p.id}`} className="block py-2 border-b border-rose/10 last:border-0">
              <p className="font-medium">{p.cliente} · {p.titulo_ramo}</p>
              <p className="text-sm text-mauve">Entrega: {p.fecha_entrega} · Pendiente: ${Number(p.pendiente).toFixed(2)}</p>
            </Link>
          ))}
          {pedidos.length === 0 && <p className="text-sm text-mauve">Sin datos aún. Configura Supabase para ver pedidos.</p>}
        </div>
      </Section>
    </div>
  );
}
