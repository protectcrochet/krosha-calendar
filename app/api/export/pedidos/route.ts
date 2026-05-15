import { listPedidos } from "@/lib/pedidos";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filters = Object.fromEntries(searchParams.entries());
  const rows = await listPedidos(filters);
  const headers = Object.keys(rows[0] ?? { id: "", cliente: "" });
  const csv = [headers.join(","), ...rows.map((r) => headers.map((h) => JSON.stringify((r as Record<string, unknown>)[h] ?? "")).join(","))].join("\n");
  return new Response(csv, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="pedidos.csv"' } });
}
