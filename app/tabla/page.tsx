import Link from "next/link";
import { listPedidos } from "@/lib/pedidos";

export default async function TablaPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const filters = await searchParams;
  const pedidos = await listPedidos(filters);
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Tabla de pedidos</h2>
      <form className="grid grid-cols-2 md:grid-cols-6 gap-2 rounded-2xl bg-white p-3 border border-rose/10">
        {['mes','estado_produccion','estado_pago','prioridad','cliente','fecha_entrega'].map((f)=><input key={f} name={f} defaultValue={filters[f]} className='rounded-xl border border-rose/20 p-2' placeholder={f} />)}
        <button className="rounded-xl bg-rose text-white px-3 py-2">Filtrar</button>
        <Link href={`/api/export/pedidos?${new URLSearchParams(filters as Record<string, string>).toString()}`} className="rounded-xl bg-ink text-white px-3 py-2 text-center">Exportar CSV</Link>
      </form>
      <div className="overflow-auto rounded-2xl bg-white border border-rose/10">
        <table className="w-full text-sm"><thead><tr className="bg-blush text-left"><th className="p-2">Cliente</th><th>Entrega</th><th>Ramo</th><th>Pendiente</th><th>Estado</th></tr></thead>
          <tbody>{pedidos.map((p)=><tr key={p.id} className="border-t border-rose/10"><td className="p-2"><Link className="underline" href={`/pedidos/${p.id}`}>{p.cliente}</Link></td><td>{p.fecha_entrega}</td><td>{p.titulo_ramo} {p.tamano}</td><td>${Number(p.pendiente).toFixed(2)}</td><td>{p.estado_produccion}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
