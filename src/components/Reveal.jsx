import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal — wraps children in a scroll-triggered fade-in + slide-up animation.
 *
 * How it works:
 *  - An IntersectionObserver watches the wrapper element.
 *  - When ~15% of the element enters the viewport, `.is-visible` is added,
 *    which flips the CSS in index.css from the hidden `.reveal` state to the
 *    visible state (opacity 1, transform none) with a smooth transition.
 *  - The observer disconnects after firing so the animation runs exactly once.
 *
 * Props:
 *  - delay:     stagger delay in ms (applied as inline transition-delay)
 *  - className: extra classes merged onto the wrapper element
 *  - as:        HTML tag to render (defaults to 'div')
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for very old browsers: show content immediately
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}