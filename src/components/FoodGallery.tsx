import ScrollReveal from "@/components/ScrollReveal";
import francesinha from "@/assets/rt-gallery-francesinha.jpg.asset.json";
import burger from "@/assets/rt-gallery-burger.jpg.asset.json";
import pasta from "@/assets/rt-gallery-pasta.jpg.asset.json";
import salad from "@/assets/rt-gallery-salad.jpg.asset.json";
import eggs from "@/assets/rt-gallery-eggs.jpg.asset.json";

const photos = [
  { asset: francesinha, alt: "Francesinha coberta com molho", className: "col-span-6 aspect-[16/9]", delay: 0 },
  { asset: pasta, alt: "Massa com camarão", className: "col-span-3 aspect-square", delay: 0.08 },
  { asset: salad, alt: "Salada com presunto, queijo e nozes", className: "col-span-3 aspect-square", delay: 0.16 },
  { asset: burger, alt: "Hambúrguer com bacon e batatas fritas", className: "col-span-3 aspect-[4/3]", delay: 0.08 },
  { asset: eggs, alt: "Batatas com presunto e ovos estrelados", className: "col-span-3 aspect-[4/3]", delay: 0.16 },
];

const FoodGallery = () => (
  <div className="grid w-full grid-cols-6 gap-3 md:gap-4">
    {photos.map(({ asset, alt, className, delay }) => (
      <ScrollReveal key={asset.asset_id} delay={delay} className={`${className} overflow-hidden rounded-sm`}>
        <img src={asset.url} alt={alt} loading="lazy" width={1400} height={alt.includes("molho") || alt.includes("Hambúrguer") ? 788 : 1400} className="h-full w-full object-cover brightness-90 transition-transform duration-700 hover:scale-[1.03]" />
      </ScrollReveal>
    ))}
  </div>
);

export default FoodGallery;