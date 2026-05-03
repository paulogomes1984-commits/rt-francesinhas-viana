const Contact = () => (
  <section id="takeaway" className="py-24 px-6 bg-warm-surface">
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-semibold">Take Away</p>
      <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Encomende para levar</h2>
      <p className="text-muted-foreground mb-10">
        Ligue-nos e faça a sua encomenda. Preparamos tudo com o mesmo carinho para si levar.
      </p>
      <a
        href="tel:258826761"
        className="inline-block px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-sm tracking-wider text-sm uppercase hover:brightness-110 transition-all duration-300"
      >
        Ligar 258 826 761
      </a>
      <div className="mt-16 rounded-sm overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.5!2d-8.8286!3d41.6936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25b42!2sR.+E%C3%A7a+de+Queir%C3%B3s+50%2C+Viana+do+Castelo!5e0!3m2!1spt-PT!2spt!4v1"
          width="100%"
          height="300"
          style={{ border: 0, filter: "grayscale(0.6) brightness(0.7)" }}
          allowFullScreen
          loading="lazy"
          title="Localização RT Francesinhas"
        />
      </div>
    </div>
  </section>
);

export default Contact;
