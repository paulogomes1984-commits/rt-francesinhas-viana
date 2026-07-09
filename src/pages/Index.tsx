import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Schedule />
    <Reviews />
    <Contact />
    <Footer />
    <ChatWidget />
  </div>
);

export default Index;
