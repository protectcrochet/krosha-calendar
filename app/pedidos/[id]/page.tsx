import { notFound } from "next/navigation";
import { listPedidos } from "@/lib/pedidos";

export default async function PedidoDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pedido = (await listPedidos()).find((p) => p.id === id);
  if (!pedido) notFound();
  return <section className="rounded-2xl bg-white p-4 border border-rose/10 space-y-2"><h2 className="text-lg font-semibold">Pedido {pedido.pedido_id}</h2>{Object.entries(pedido).map(([k,v])=><p key={k}><span className="font-medium">{k}:</span> {String(v)}</p>)}</section>;
}
