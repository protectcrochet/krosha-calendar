import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Krosha Pedidos",
  description: "PWA para gestión de pedidos Krosha",
  manifest: "/manifest.json",
};

const nav = [
  ["Dashboard", "/"],
  ["Calendario", "/calendario"],
  ["Tabla", "/tabla"],
  ["Producción", "/produccion"],
  ["Pagos", "/pagos-pendientes"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <main className="mx-auto max-w-6xl p-4 pb-24 space-y-6">
          <header className="sticky top-0 z-20 rounded-2xl bg-white/90 backdrop-blur p-3 shadow-sm border border-rose/10">
            <h1 className="text-xl font-bold text-rose">Krosha Pedidos</h1>
            <nav className="mt-2 flex flex-wrap gap-2 text-sm">
              {nav.map(([name, href]) => (
                <Link key={href} href={href} className="rounded-full bg-blush px-3 py-1 hover:bg-rose/20">
                  {name}
                </Link>
              ))}
            </nav>
          </header>
          {children}
          <Link href="/pedidos/nuevo" className="fixed bottom-5 right-5 rounded-full bg-rose text-white px-5 py-3 font-medium shadow-lg">
            + Nuevo pedido
          </Link>
        </main>
      </body>
    </html>
  );
}
