import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/Intro3D.css";

const Intro3D = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. حركة الحروف مع دوران 3D حقيقي
    tl.from(".char", {
      y: 150,
      rotateX: -110,
      transformOrigin: "top center",
      opacity: 0,
      stagger: 0.08,
      duration: 1.2,
      ease: "expo.out",
    })
    // 2. حركة "Flash" سريعة للون البني
    .to(".char", {
      color: "#3d2b1f", // بني داكن جداً
      duration: 0.1,
      stagger: 0.05,
    }, "-=0.5")
    // 3. تأثير الدرج (Stairs) مع شفافية متدرجة
    .to(".overlay-bar", {
      height: "100%",
      stagger: {
        each: 0.1,
        from: "start", // أو "center" لتأثير مختلف
      },
      duration: 1.2,
      ease: "power4.inOut",
    })
    .to(container.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
    });

  }, { scope: container });

  return (
    <div ref={container} className="intro-container">
      <div className="overlay-container">
        {[...Array(12)].map((_, i) => ( 
          <div key={i} className="overlay-bar"></div>
        ))}
      </div>

      <div className="name-wrapper">
        <h1 className="hero-name">
          {"DIGITAL".split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1>
        <div className="intro-subtext">EXPERIENCE — 2026</div>
      </div>
    </div>
  );
};

export default Intro3D;