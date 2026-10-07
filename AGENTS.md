# Project rules

- Store long image sequences as CDN-hosted sprite sheets and render them through a responsive canvas to minimize network requests and keep scroll playback synchronized.
- Use the shared ScrollReveal for main-page content reveals; scroll-linked opacity and translation keep the text motion consistent with the hero and respect reduced motion.
- Smooth the information sequence using offline motion-compensated intermediate frames in its CDN sprite and short time-based scroll easing; draw one frame at a time to avoid ghosting from crossfades.
- Keep the information photo composition in FoodGallery using CDN asset pointers and the shared ScrollReveal; this isolates image layout from restaurant contact details.