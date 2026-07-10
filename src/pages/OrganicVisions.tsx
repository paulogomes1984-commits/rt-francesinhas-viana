import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Menu, X } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4";

const NAV_LINKS = ["Wander", "Archive", "Story", "Connect"];

const StaggeredFade = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const chars = Array.from(text);
  return (
    <span ref={ref} className="inline-block">
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
};

const OrganicVisions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "#010101", minHeight: "100vh", height: "100dvh", fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />

      <nav className="relative z-20 flex items-center justify-between md:justify-center px-5 sm:px-8 py-6 md:gap-16">
        <span className="text-white uppercase font-light text-sm md:text-base" style={{ letterSpacing: "0.25em" }}>
          <span className="md:hidden">Organic Visions</span>
          <span className="hidden md:inline" style={{ letterSpacing: "0.3em" }}>Organic Visions</span>
        </span>
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-300 text-xs uppercase font-light"
              style={{ letterSpacing: "0.2em" }}
            >
              {l}
            </a>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mobile-menu-glass fixed top-16 left-4 right-4 z-50 md:hidden rounded-2xl py-8 flex flex-col items-center gap-5"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l}
                href="#"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-white uppercase font-light text-sm"
                style={{ letterSpacing: "0.25em" }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 pt-12 sm:pt-16 md:pt-24">
        <h1
          className="font-garamond font-normal text-white tracking-tight text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 sm:mb-8"
          style={{ lineHeight: 1.08 }}
        >
          <span className="block"><StaggeredFade text="WITNESS THE" /></span>
          <span className="block"><StaggeredFade text="HIDDEN REALM" /></span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-white/70 font-light leading-relaxed max-w-xs sm:max-w-md mb-8 sm:mb-10 text-sm sm:text-base md:text-lg"
        >
          An odyssey through delicate living forms,
          <br className="hidden sm:block" /> revealed by lens and curiosity.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="liquid-glass rounded-full text-white/90 uppercase px-7 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm"
          style={{ letterSpacing: "0.18em" }}
        >
          Begin the Experience
        </motion.button>
      </div>
    </div>
  );
};

export default OrganicVisions;
