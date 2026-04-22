import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/Intro3D.css";

const Intro3D = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. حركة الحروف 3D
    tl.from(".char", {
      y: 150,
      rotateX: -110,
      transformOrigin: "top center",
      opacity: 0,
      stagger: 0.08,
      duration: 1.2,
      ease: "expo.out",
    })
    // 2. ظهور المستطيل (Status Indicator) مورا الحروف
    .from(".status-indicator", {
      x: -20,
      opacity: 0,
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6") 
    // 3. تحويل اللون للون النحاسي/البني
    .to(".char", {
      color: "#A47251", 
      duration: 0.1,
      stagger: 0.05,
    }, "-=0.8")
    // 4. خروج الـ Intro (الدرج)
    .to(".overlay-bar", {
      height: "100%",
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.inOut",
    }, "+=0.3")
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
          {"CODE".split("").map((char, index) => (
            <span key={index} className={char === " " ? "space" : "char"}>
              {char}
            </span>
          ))}
          
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            <span className="status-text">AVAILABLE</span>
          </div>
        </h1>
        <div className="intro-subtext">FULL-STACK ARCHITECT — 2026</div>
      </div>
    </div>
  );
};

export default Intro3D;