# Krosha Calendar · MVP

PWA para gestión de pedidos de muñecas tejidas y ramos personalizados de Krosha.

## Incluye
- Dashboard con KPIs
- Calendario mensual de entregas con apertura de detalle y creación por día
- Formulario completo de pedidos
- Tabla de pedidos con filtros
- Vista de producción por estados
- Vista de pagos pendientes
- Exportación CSV (`/api/export/pedidos`)
- Migración SQL para Supabase

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase

## Variables de entorno
Copia `.env.example` a `.env.local` y completa:

```bash
cp .env.example .env.local
```

## Desarrollo
```bash
npm install
npm run dev
```

## Base de datos (Supabase)
Ejecuta la migración:
- `supabase/migrations/20260515000000_create_pedidos.sql`

## Exportación CSV
- Todos los pedidos: `/api/export/pedidos`
- Con filtros: `/api/export/pedidos?mes=2026-05&estado_pago=Parcial`

## Deploy en Vercel
1. Importa el repositorio en Vercel.
2. Configura variables de entorno de `.env.example`.
3. Build command: `npm run build`.
4. Output: `.next` (automático para Next.js).
