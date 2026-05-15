create extension if not exists "pgcrypto";

create table if not exists public.pedidos (
  id uuid primary key default gen_random_uuid(),
  pedido_id text not null unique,
  fecha_pedido date not null,
  fecha_entrega date not null,
  cliente text not null,
  telefono text,
  instagram text,
  canal_venta text not null,
  titulo_ramo text not null,
  tamano text not null,
  piel text not null,
  color_vestido text,
  garbanzo boolean not null default false,
  cabello text,
  rosas text,
  detalles_adicionales text,
  anticipo numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  pendiente numeric(10,2) generated always as (total - anticipo) stored,
  estado_pago text not null check (estado_pago in ('Sin anticipo', 'Parcial', 'Liquidado')),
  estado_produccion text not null check (estado_produccion in ('Nuevo pedido', 'Anticipo recibido', 'En producción', 'Faltan detalles', 'Listo para entrega', 'Entregado', 'Cancelado')),
  prioridad text not null check (prioridad in ('Normal', 'Urgente', 'Muy urgente')),
  fotos_referencia text,
  responsable text,
  notas_internas text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_pedidos_fecha_entrega on public.pedidos(fecha_entrega);
create index if not exists idx_pedidos_estado_produccion on public.pedidos(estado_produccion);
create index if not exists idx_pedidos_cliente on public.pedidos(cliente);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_pedidos_updated_at on public.pedidos;
create trigger trg_pedidos_updated_at
before update on public.pedidos
for each row execute function public.set_updated_at();
