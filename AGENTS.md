# Project rules

- Store long image sequences as CDN-hosted sprite sheets and render them through a responsive canvas to minimize network requests and keep scroll playback synchronized.
- Use the shared ScrollReveal for main-page content reveals; scroll-linked opacity and translation keep the text motion consistent with the hero and respect reduced motion.
- Smooth the information sequence with time-based frame interpolation and adjacent-frame blending; this avoids hard jumps without adding media requests.