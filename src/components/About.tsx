import interiorImg from "@/assets/restaurant-interior.jpg";

const About = () => (
  <section id="sobre" className="py-24 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">Sobre Nós</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
          Uma experiência <span className="text-gradient-gold">única</span> em Viana
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          No coração de Viana do Castelo, o RT Francesinhas oferece a verdadeira essência
          da gastronomia minhota. Com um molho secreto que conquista até os mais exigentes
          apreciadores, somos reconhecidos como uma das melhores francesinhas do norte de Portugal.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          O nosso compromisso com ingredientes frescos, serviço atencioso e um ambiente
          acolhedor faz de cada refeição um momento inesquecível.
        </p>
      </div>
      <div className="opacity-0 animate-fade-up rounded-sm overflow-hidden" style={{ animationDelay: "0.4s" }}>
        <img src={interiorImg} alt="Interior do restaurante RT Francesinhas" loading="lazy" width={1280} height={720} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
      </div>
    </div>
  </section>
);

export default About;
