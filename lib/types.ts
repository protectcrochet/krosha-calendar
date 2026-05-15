export type EstadoProduccion =
  | "Nuevo pedido"
  | "Anticipo recibido"
  | "En producción"
  | "Faltan detalles"
  | "Listo para entrega"
  | "Entregado"
  | "Cancelado";

export type EstadoPago = "Sin anticipo" | "Parcial" | "Liquidado";
export type Prioridad = "Normal" | "Urgente" | "Muy urgente";

export type Pedido = {
  id: string;
  pedido_id: string;
  fecha_pedido: string;
  fecha_entrega: string;
  cliente: string;
  telefono: string | null;
  instagram: string | null;
  canal_venta: string;
  titulo_ramo: string;
  tamano: string;
  piel: string;
  color_vestido: string | null;
  garbanzo: boolean;
  cabello: string | null;
  rosas: string | null;
  detalles_adicionales: string | null;
  anticipo: number;
  total: number;
  pendiente: number;
  estado_pago: EstadoPago;
  estado_produccion: EstadoProduccion;
  prioridad: Prioridad;
  fotos_referencia: string | null;
  responsable: string | null;
  notas_internas: string | null;
  created_at: string;
  updated_at: string;
};
