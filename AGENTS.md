# Project rules

- Store long image sequences as CDN-hosted sprite sheets and render them through a responsive canvas to minimize network requests and keep scroll playback synchronized.
- Split high-frame-count information sequences into bounded sprite sheets and cache only the current sheet and its neighbours to preserve original frames without excessive decoded-image memory.
- Use the shared ScrollReveal for main-page content reveals; scroll-linked opacity and translation keep the text motion consistent with the hero and respect reduced motion.
- Smooth the information sequence with short time-based scroll easing and draw only the nearest original frame; avoiding crossfades and synthetic frames preserves sharp edges without ghosting or added media requests.
- Keep the information photo composition in FoodGallery using CDN asset pointers and the shared ScrollReveal; this isolates image layout from restaurant contact details.