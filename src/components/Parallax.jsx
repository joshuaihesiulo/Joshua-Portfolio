import React, { useEffect, useRef } from 'react';

/**
 * Parallax — moves children vertically at a slower speed than page scroll,
 * creating a subtle depth effect on decorative elements.
 *
 * How it works:
 *  - On scroll, the element's distance from the viewport center is measured
 *    and multiplied by `speed` to compute a pixel offset.
 *  - The offset is applied via `transform: translate3d()` (GPU-accelerated,
 *    no layout thrashing) inside a requestAnimationFrame loop that eases
 *    toward the target for smooth 60fps motion.
 *  - Fully disabled when the user prefers reduced motion.
 *
 * Props:
 *  - speed:     0 (static) to 0.5 (strong). Keep 0.15–0.3 for subtle motion.
 *  - className: extra classes merged onto the wrapper element
 */
export default function Parallax({ children, speed = 0.2, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preferences: no parallax movement at all
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = null;
    let current = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      // Normalized distance from viewport center (-0.5 … +0.5)
      const progress =
        (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const target = -progress * 100 * speed;

      // Ease current position toward the target for smooth scrolling
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.05) current = target;

      el.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;
      rafId = null;

      // Keep animating until we've settled on the target
      if (Math.abs(target - current) > 0.05) {
        rafId = requestAnimationFrame(update);
      }
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax ${className}`} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}