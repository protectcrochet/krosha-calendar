import { endOfMonth, endOfWeek, formatISO, startOfMonth, startOfWeek } from "date-fns";
import { supabase } from "./supabase";
import { Pedido } from "./types";

export async function listPedidos(filters?: Record<string, string | undefined>) {
  if (!supabase) return [] as Pedido[];
  let query = supabase.from("pedidos").select("*").order("fecha_entrega", { ascending: true });
  if (filters?.mes) {
    query = query.gte("fecha_entrega", `${filters.mes}-01`).lte("fecha_entrega", `${filters.mes}-31`);
  }
  if (filters?.estado_produccion) query = query.eq("estado_produccion", filters.estado_produccion);
  if (filters?.estado_pago) query = query.eq("estado_pago", filters.estado_pago);
  if (filters?.prioridad) query = query.eq("prioridad", filters.prioridad);
  if (filters?.cliente) query = query.ilike("cliente", `%${filters.cliente}%`);
  if (filters?.fecha_entrega) query = query.eq("fecha_entrega", filters.fecha_entrega);
  const { data } = await query;
  return (data ?? []) as Pedido[];
}

export function computeDashboard(pedidos: Pedido[]) {
  const now = new Date();
  const monthA = startOfMonth(now);
  const monthB = endOfMonth(now);
  const weekA = startOfWeek(now, { weekStartsOn: 1 });
  const weekB = endOfWeek(now, { weekStartsOn: 1 });

  const inRange = (d: string, a: Date, b: Date) => new Date(d) >= a && new Date(d) <= b;
  const pedidosMes = pedidos.filter((p) => inRange(p.fecha_entrega, monthA, monthB));
  const pedidosSemana = pedidos.filter((p) => inRange(p.fecha_entrega, weekA, weekB));
  const entregasProximas = pedidos.filter((p) => new Date(p.fecha_entrega) >= now).slice(0, 5);

  return {
    pedidosMes: pedidosMes.length,
    pedidosSemana: pedidosSemana.length,
    entregasProximas: entregasProximas.length,
    anticipos: pedidos.reduce((acc, p) => acc + Number(p.anticipo), 0),
    pendiente: pedidos.reduce((acc, p) => acc + Number(p.pendiente), 0),
    urgentes: pedidos.filter((p) => p.prioridad !== "Normal").length,
    monthISO: formatISO(monthA, { representation: "date" }).slice(0, 7),
  };
}
