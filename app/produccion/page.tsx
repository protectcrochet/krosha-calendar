import { ESTADOS_PRODUCCION } from "@/lib/constants";
import { listPedidos } from "@/lib/pedidos";

export default async function ProduccionPage() {
  const pedidos = await listPedidos();
  return <section className="space-y-3"><h2 className="text-lg font-semibold">Vista de producción</h2><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">{ESTADOS_PRODUCCION.map((estado)=><div key={estado} className="rounded-2xl bg-white p-3 border border-rose/10"><h3 className="font-medium mb-2">{estado}</h3><div className="space-y-2">{pedidos.filter(p=>p.estado_produccion===estado).map(p=><div key={p.id} className="rounded-lg bg-blush p-2 text-sm"><p>{p.cliente}</p><p className="text-xs">{p.titulo_ramo} · {p.fecha_entrega}</p></div>)}</div></div>)}</div></section>;
}
