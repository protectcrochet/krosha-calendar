import { listPedidos } from "@/lib/pedidos";

export default async function PagosPendientesPage() {
  const pedidos = (await listPedidos()).filter((p) => Number(p.pendiente) > 0);
  const total = pedidos.reduce((acc, p) => acc + Number(p.pendiente), 0);
  return <section className="space-y-3"><h2 className="text-lg font-semibold">Pagos pendientes</h2><div className="rounded-2xl bg-white p-4 border border-rose/10"><p className="font-medium">Total pendiente: ${total.toFixed(2)}</p><div className="mt-2 space-y-2">{pedidos.map((p)=><article key={p.id} className="rounded-lg bg-blush p-2 text-sm"><p>{p.cliente} · {p.titulo_ramo}</p><p>Pendiente: ${Number(p.pendiente).toFixed(2)}</p></article>)}</div></div></section>;
}
