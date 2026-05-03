import { Clock, MapPin, Phone } from "lucide-react";
import contactosImg from "@/assets/contactos.jpg";

const Schedule = () => (
  <section id="horario" className="py-24 px-6 bg-warm-surface">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">Informações</p>
        <h2 className="text-4xl font-serif font-bold text-foreground">Visite-nos</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="grid sm:grid-cols-3 gap-10">
          <div className="flex flex-col items-center gap-3">
            <Clock className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Horário</h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-center">
              Todos os dias<br />
              12:00 – 15:00<br />
              19:00 – 23:00
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Morada</h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-center">
              R. Eça de Queirós 50<br />
              4900-432 Viana do Castelo
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg font-semibold text-foreground">Contacto</h3>
            <a href="tel:258826761" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              258 826 761
            </a>
          </div>
        </div>

        <div className="rounded-sm overflow-hidden">
          <img
            src={contactosImg}
            alt="Pratos do RT Francesinhas"
            loading="lazy"
            className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700 brightness-[0.85] sepia-[0.15] saturate-[1.1]"
          />
        </div>
      </div>

      <div className="divider-gold w-48 mx-auto mt-12" />
    </div>
  </section>
);

export default Schedule;
