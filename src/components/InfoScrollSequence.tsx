import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import sequenceAsset from "@/assets/rt-burger-scroll-sequence.jpg.asset.json";
import posterAsset from "@/assets/rt-burger-scroll-poster.jpg.asset.json";

const LAST_FRAME = 24;
const SPRITE_COLUMNS = 5;
const FRAME_WIDTH = 800;
const FRAME_HEIGHT = 450;

type InfoScrollSequenceProps = {
  children: ReactNode;
};

const InfoScrollSequence = ({ children }: InfoScrollSequenceProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    const sourceX = (frame % SPRITE_COLUMNS) * FRAME_WIDTH;
    const sourceY = Math.floor(frame / SPRITE_COLUMNS) * FRAME_HEIGHT;

    context.clearRect(0, 0, width, height);
    context.drawImage(
      sprite,
      sourceX,
      sourceY,
      FRAME_WIDTH,
      FRAME_HEIGHT,
      (width - drawWidth) / 2,
      (height - drawHeight) / 2,
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
      const initialFrame = reducedMotion ? LAST_FRAME : 0;
      frameRef.current = initialFrame;
      drawFrame(initialFrame);
      setLoaded(true);
    };
    return () => {
      sprite.onload = null;
    };
  }, [drawFrame, reducedMotion]);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const section = sectionRef.current;
      if (!section) return;

      if (reducedMotion) {
        drawFrame(LAST_FRAME);
        return;
      }

      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      const nextFrame = Math.round(progress * LAST_FRAME);
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
    <div ref={sectionRef} className="relative isolate bg-background">
      <div className="sticky top-0 z-0 h-[100dvh] overflow-hidden" aria-hidden="true">
        <img
          src={posterAsset.url}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
          loading="lazy"
        />
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background/90" />
      </div>
      <div className="relative z-10 -mt-[100dvh]">{children}</div>
    </div>
  );
};

export default InfoScrollSequence;