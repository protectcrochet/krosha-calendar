import { Suspense } from "react";
import NuevoPedidoForm from "./NuevoPedidoForm";

export default function NuevoPedidoPage() {
  return (
    <Suspense fallback={<div className="rounded-2xl bg-white p-4 border border-rose/10">Cargando formulario...</div>}>
      <NuevoPedidoForm />
    </Suspense>
  );
}
