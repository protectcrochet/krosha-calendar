import { EstadoPago, EstadoProduccion, Prioridad } from "./types";

export const CANALES_VENTA = ["WhatsApp", "Instagram", "TikTok", "Facebook", "Recomendación", "Otro"] as const;
export const TAMANOS = ['10"', '14"', '18"', '22"', '27"'] as const;
export const PIELES = ["Sinfonía arena", "Sinfonía camello", "Normal"] as const;

export const ESTADOS_PAGO: EstadoPago[] = ["Sin anticipo", "Parcial", "Liquidado"];
export const ESTADOS_PRODUCCION: EstadoProduccion[] = [
  "Nuevo pedido",
  "Anticipo recibido",
  "En producción",
  "Faltan detalles",
  "Listo para entrega",
  "Entregado",
  "Cancelado",
];
export const PRIORIDADES: Prioridad[] = ["Normal", "Urgente", "Muy urgente"];

export const ESTADO_COLORS: Record<EstadoProduccion, string> = {
  "Nuevo pedido": "bg-slate-100 text-slate-700",
  "Anticipo recibido": "bg-sky-100 text-sky-700",
  "En producción": "bg-violet-100 text-violet-700",
  "Faltan detalles": "bg-amber-100 text-amber-700",
  "Listo para entrega": "bg-emerald-100 text-emerald-700",
  Entregado: "bg-teal-100 text-teal-700",
  Cancelado: "bg-rose-100 text-rose-700",
};
