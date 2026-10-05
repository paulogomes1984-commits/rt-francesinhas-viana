import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import logoImg from "@/assets/rt-logo.png";
import sequenceAsset from "@/assets/rt-francesinha-scroll-sequence.jpg.asset.json";
import posterAsset from "@/assets/rt-francesinha-scroll-poster.jpg.asset.json";
import finalFrameAsset from "@/assets/rt-francesinha-final.jpg.asset.json";

const LAST_FRAME = 37;
const SPRITE_COLUMNS = 5;
const FRAME_WIDTH = 800;
const FRAME_HEIGHT = 450;

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLImageElement | null>(null);
  const frameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const drawFrame = useCallback((frame: number) => {
    const canvas = canvasRef.current;
    const sprite = spriteRef.current;
    if (!canvas || !sprite?.complete || sprite.naturalWidth === 0) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const context = canvas.getContext("2d");
    if (!context) return;

    const scale = Math.max(width / FRAME_WIDTH, height / FRAME_HEIGHT);
    const drawWidth = FRAME_WIDTH * scale;
    const drawHeight = FRAME_HEIGHT * scale;
    const dx = (width - drawWidth) / 2;
    const dy = (height - drawHeight) / 2;
    const sourceX = (frame % SPRITE_COLUMNS) * FRAME_WIDTH;
    const sourceY = Math.floor(frame / SPRITE_COLUMNS) * FRAME_HEIGHT;

    context.clearRect(0, 0, width, height);
    context.drawImage(
      sprite,
      sourceX,
      sourceY,
      FRAME_WIDTH,
      FRAME_HEIGHT,
      dx,
      dy,
      drawWidth,
      drawHeight,
    );
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const sprite = new Image();
    sprite.decoding = "async";
    sprite.src = sequenceAsset.url;
    sprite.onload = () => {
      spriteRef.current = sprite;
      frameRef.current = 0;
      drawFrame(0);
      setLoaded(true);
    };
    return () => {
      sprite.onload = null;
    };
  }, [drawFrame]);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const section = sectionRef.current;
      if (!section || reducedMotion) {
        drawFrame(reducedMotion ? LAST_FRAME : 0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      const nextFrame = Math.min(LAST_FRAME, Math.round(progress * LAST_FRAME));

      const logoProgress = Math.min(1, Math.max(0, (progress - 0.08) / 0.18));
      const textProgress = Math.min(1, Math.max(0, (progress - 0.28) / 0.22));
      if (logoRef.current) {
        logoRef.current.style.opacity = String(logoProgress);
        logoRef.current.style.transform = `translateY(${(1 - logoProgress) * 24}px) scale(${0.9 + logoProgress * 0.1})`;
      }
      if (textRef.current) {
        textRef.current.style.opacity = String(textProgress);
        textRef.current.style.transform = `translateY(${(1 - textProgress) * 28}px)`;
      }

      if (nextFrame !== frameRef.current) {
        frameRef.current = nextFrame;
        drawFrame(nextFrame);
      }
    };

    const requestUpdate = () => {
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame, loaded, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={reducedMotion ? "relative h-[100dvh]" : "relative h-[185dvh] md:h-[205dvh]"}
      aria-label="Francesinha RT com molho a ser servido"
    >
      <div className="sticky top-0 h-[100dvh] min-h-[36rem] overflow-hidden bg-background">
        <img
          src={reducedMotion ? finalFrameAsset.url : posterAsset.url}
          alt="Francesinha RT acabada de servir"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
          loading="eager"
        />
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/95" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-8 pt-20 text-center">
          <div className="max-w-3xl">
            <img
              ref={logoRef}
              src={logoImg}
              alt="Logótipo RT Francesinhas"
              className={`mx-auto mb-6 h-24 w-24 rounded-full object-cover shadow-elegant will-change-transform md:h-28 md:w-28 ${reducedMotion ? "opacity-100" : "opacity-0"}`}
            />
            <div
              ref={textRef}
              className={`will-change-transform ${reducedMotion ? "opacity-100" : "opacity-0"}`}
            >
              <h1 className="mb-4 text-5xl font-bold md:text-7xl">
                <span className="text-gradient-gold">RT</span>{" "}
                <span className="text-foreground">Francesinhas</span>
              </h1>
              <p className="mx-auto max-w-xl text-lg font-light text-foreground/90 md:text-xl">
                A alma do Minho entre fatias. O molho que Viana não esquece.
              </p>
            </div>
          </div>

          {!reducedMotion && (
            <div className="absolute bottom-5 flex flex-col items-center gap-1 text-foreground/70" aria-hidden="true">
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em]">Descubra</span>
              <ChevronDown className="h-5 w-5 animate-bounce text-primary" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;