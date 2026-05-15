import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  if (!supabase) return new Response("Supabase no configurado", { status: 500 });
  const body = await request.json();
  const { error, data } = await supabase.from("pedidos").insert(body).select("id").single();
  if (error) return new Response(error.message, { status: 400 });
  return Response.json(data);
}
