import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import '../styles/NewMenu.css'

export default function BubbleMenu({
  logo,
  items,
  menuAriaLabel = "Toggle menu",
  menuBg = "#fff",
  menuContentColor = "#111",
  useFixedPosition = true,
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef(null);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);

const handleToggle = () => {
  const nextState = !isMenuOpen;

  if (nextState) {
    setShowOverlay(true);
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }

  setIsMenuOpen(nextState);
};


  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });
        tl.to(bubble, { scale: 1, duration: animationDuration, ease: animationEase });
        if (labels[i]) {
          tl.to(labels[i], { y: 0, autoAlpha: 1, duration: animationDuration, ease: "power3.out" }, `-=${animationDuration * 0.9}`);
        }
      });
    } else if (showOverlay) {
      gsap.to(labels, { y: 24, autoAlpha: 0, duration: 0.2, ease: "power3.in" });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          setShowOverlay(false);
        }
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  return (
    <>
      <nav className={`bubble-menu ${useFixedPosition ? "fixed" : "absolute"}`} aria-label="Main navigation">
        <div className="bubble logo-bubble" style={{ background: menuBg }}>
          <span className="logo-content">{logo}</span>
        </div>

        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: menuBg }}
        >
          <span className="menu-line" style={{ background: menuContentColor }} />
          <span className="menu-line short" style={{ background: menuContentColor }} />
        </button>
      </nav>

      {showOverlay && (
        <div ref={overlayRef} className={`bubble-menu-items ${useFixedPosition ? "fixed" : "absolute"}`} aria-hidden={!isMenuOpen}>
          <ul className="pill-list" role="menu" aria-label="Menu links">
            {items.map((item, idx) => (
              <li key={idx} role="none" className="pill-col">
                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className="pill-link"
                  style={{
                    "--item-rot": `${item.rotation ?? 0}deg`,
                    "--pill-bg": "rgba(255, 255, 255, 0.2)",
                    "--pill-color": "#fff",
                    "--hover-bg": item.hoverStyles?.bgColor,
                    "--hover-color": item.hoverStyles?.textColor || menuContentColor
                  }}
                  ref={el => (bubblesRef.current[idx] = el)}
                >
                  <span className="pill-label" ref={el => (labelRefs.current[idx] = el)}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
