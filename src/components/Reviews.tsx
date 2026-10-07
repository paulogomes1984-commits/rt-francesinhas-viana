import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reviews = [
  { name: "Matheus Gonçalves", source: "Google", rating: 5, text: "I had an exceptional dining experience at this restaurant. The warm and inviting ambiance, spotless cleanliness, and attentive staff made it truly memorable." },
  { name: "Mikhael Rodarte", source: "Google", rating: 5, text: "Excellent service (Ricardo and Luciano are very kind and polite) and amazing food. One of the best Francesinha in Viana." },
  { name: "Eduardo Matias", source: "Google", rating: 5, text: "The lovely environment, the great beverages, the delicious food, and the quality of the services make it one of the most pleasant places in Minho." },
  { name: "Susan Garrick", source: "Google", rating: 5, text: "Lovely dining experience, good range of beers. I tried the Beef Francesinhas with fries, very good portions. Lovely staff." },
  { name: "Samuel Rocha", source: "Google", rating: 5, text: "Best francesinha I've ever tasted." },
  { name: "Andre Morandi", source: "Google", rating: 5, text: "Both for those that already appreciate the art of Francesinhas, and also for the ones who don't know it yet, here is a place to enjoy it in Viana big time." },
];

const Reviews = () => (
  <section id="criticas" className="flex min-h-[115dvh] items-center px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal className="text-center">
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">Testemunhos</p>
      </ScrollReveal>
      <ScrollReveal className="text-center mb-16" delay={0.08}>
        <h2 className="text-4xl font-serif font-bold text-foreground">O que dizem os nossos clientes</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <ScrollReveal
            key={i}
            delay={(i % 3) * 0.08}
            className="rounded-sm border border-border bg-card/90 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium text-sm">{r.name}</span>
              <span className="text-muted-foreground text-xs">{r.source}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
