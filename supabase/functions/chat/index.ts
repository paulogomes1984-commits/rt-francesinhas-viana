// @ts-nocheck
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `És o assistente virtual do restaurante RT Francesinhas, em Viana do Castelo. Responde de forma simpática, breve e em português de Portugal.

Informações do restaurante:
- Nome: RT Francesinhas
- Morada: R. Eça de Queirós 50, 4900-432 Viana do Castelo
- Telefone: 258 826 761
- Horário: Todos os dias, 12:00–15:00 e 19:00–23:00
- Especialidade: Francesinhas com molho especial da casa
- Serviço: Take Away disponível (não aceita reservas de mesa)
- Para encomendas: pedir para ligar 258 826 761

Se não souberes algo específico (preços exatos, ementa completa), sugere ligar para o restaurante.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return new Response(JSON.stringify({ error: text }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
