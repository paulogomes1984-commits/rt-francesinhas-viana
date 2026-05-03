import { Clock, MapPin, Phone } from "lucide-react";

const Schedule = () => (
  <section id="horario" className="py-24 px-6 bg-warm-surface">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">Informações</p>
      <h2 className="text-4xl font-serif font-bold mb-12 text-foreground">Visite-nos</h2>

      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div className="flex flex-col items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          <h3 className="font-serif text-lg font-semibold text-foreground">Horário</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Todos os dias<br />
            12:00 – 15:00<br />
            19:00 – 23:00
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          <h3 className="font-serif text-lg font-semibold text-foreground">Morada</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
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

      <div className="divider-gold w-48 mx-auto" />
    </div>
  </section>
);

export default Schedule;
