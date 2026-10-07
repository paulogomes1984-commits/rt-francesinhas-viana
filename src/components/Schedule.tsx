import { Clock, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FoodGallery from "@/components/FoodGallery";

const Schedule = () => (
  <section id="horario" className="flex min-h-[100dvh] items-center px-6 py-24">
    <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
      <FoodGallery />
      <div className="ml-auto w-full max-w-md lg:pl-6">
      <ScrollReveal className="text-left">
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">Informações</p>
      </ScrollReveal>
      <ScrollReveal className="mb-10 text-left" delay={0.08}>
        <h2 className="text-4xl font-serif font-bold text-foreground">Visite-nos</h2>
      </ScrollReveal>

      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8">
          <ScrollReveal className="flex flex-col items-start gap-3">
            <Clock className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Horário</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Todos os dias<br />
              12:00 – 15:00<br />
              19:00 – 23:00
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col items-start gap-3">
            <MapPin className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Morada</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              R. Eça de Queirós 50<br />
              4900-432 Viana do Castelo
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col items-start gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Contacto</h3>
            <a href="tel:258826761" className="text-foreground/80 text-sm hover:text-primary transition-colors">
              258 826 761
            </a>
          </ScrollReveal>
        </div>

      </div>

      <div className="divider-gold w-48 mt-10" />
      </div>
    </div>
  </section>
);

export default Schedule;
