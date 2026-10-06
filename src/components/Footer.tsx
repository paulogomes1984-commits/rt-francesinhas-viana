import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => (
  <footer className="py-10 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
      <ScrollReveal finishAtBottom><p>&copy; {new Date().getFullYear()} RT Francesinhas. Todos os direitos reservados.</p></ScrollReveal>
      <ScrollReveal finishAtBottom><p>R. Eça de Queirós 50, 4900-432 Viana do Castelo</p></ScrollReveal>
    </div>
  </footer>
);

export default Footer;
