import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import sequenceAsset from "@/assets/rt-burger-fluid.jpg.asset.json";
import posterAsset from "@/assets/rt-burger-scroll-poster.jpg.asset.json";

const LAST_FRAME = 93;
const SPRITE_COLUMNS = 10;
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
  const targetFrameRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
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
    context.clearRect(0, 0, width, height);
    // Motion-compensated intermediate frames keep edges crisp; never crossfade poses.
    const index = Math.min(LAST_FRAME, Math.max(0, Math.round(frame)));
      context.drawImage(
        sprite,
        (index % SPRITE_COLUMNS) * FRAME_WIDTH,
        Math.floor(index / SPRITE_COLUMNS) * FRAME_HEIGHT,
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
    const animate = (time: number) => {
      rafRef.current = null;
      const elapsed = Math.min(64, lastTimeRef.current === null ? 16 : time - lastTimeRef.current);
      lastTimeRef.current = time;
      const current = Math.max(0, frameRef.current);
      const difference = targetFrameRef.current - current;
      const next = Math.abs(difference) < 0.005
        ? targetFrameRef.current
        : current + difference * (1 - Math.exp(-elapsed / 50));
      frameRef.current = next;
      drawFrame(next);
      if (Math.abs(targetFrameRef.current - next) >= 0.005) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        lastTimeRef.current = null;
      }
    };

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      if (reducedMotion) {
        drawFrame(LAST_FRAME);
        return;
      }

      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      targetFrameRef.current = progress * LAST_FRAME;
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(animate);
    };

    const resize = () => {
      drawFrame(Math.max(0, frameRef.current));
      update();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", resize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
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
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/35 to-background/75" />
      </div>
      <div className="relative z-10 -mt-[100dvh]">{children}</div>
    </div>
  );
};

export default InfoScrollSequence;