import interiorImg from "@/assets/restaurant-interior.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => (
  <section id="sobre" className="relative z-20 -mt-[10dvh] bg-gradient-to-b from-transparent via-background to-background px-6 pb-24 pt-[18dvh] md:-mt-[14dvh] md:pt-[22dvh]">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <ScrollReveal>
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">Sobre Nós</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
          Uma experiência <span className="text-gradient-gold">única</span> em Viana
        </h2>
        </ScrollReveal>
        <ScrollReveal>
        <p className="text-muted-foreground leading-relaxed mb-6">
          No coração de Viana do Castelo, o RT Francesinhas oferece a verdadeira essência
          da gastronomia minhota. Com um molho secreto que conquista até os mais exigentes
          apreciadores, somos reconhecidos como uma das melhores francesinhas do norte de Portugal.
        </p>
        </ScrollReveal>
        <ScrollReveal>
        <p className="text-muted-foreground leading-relaxed">
          O nosso compromisso com ingredientes frescos, serviço atencioso e um ambiente
          acolhedor faz de cada refeição um momento inesquecível.
        </p>
        </ScrollReveal>
      </div>
      <ScrollReveal className="rounded-sm overflow-hidden">
        <img src={interiorImg} alt="Interior do restaurante RT Francesinhas" loading="lazy" width={1280} height={720} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
      </ScrollReveal>
    </div>
  </section>
);

export default About;
