import heroImg from "@/assets/hero-francesinha.jpg";
import logoImg from "@/assets/rt-logo.png";

const Hero = () => (
  <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Francesinha RT" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up">
      <img src={logoImg} alt="RT Francesinhas logo" className="w-28 h-28 mx-auto mb-8 rounded-full object-cover" />
      <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4">
        <span className="text-gradient-gold">RT</span>{" "}
        <span className="text-foreground">Francesinhas</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto mb-3">
        A alma do Minho entre fatias. O molho que Viana não esquece.
      </p>
      <div className="divider-gold w-32 mx-auto my-8" />
      <a
        href="#reservar"
        className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm tracking-wider text-sm uppercase hover:brightness-110 transition-all duration-300"
      >
        Reservar Mesa
      </a>
    </div>
  </section>
);

export default Hero;
