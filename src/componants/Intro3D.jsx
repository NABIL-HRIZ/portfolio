import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/Intro3D.css";

const Intro3D = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. حركة الحروف (Letter by Letter)
    tl.from(".char", {
      y: 100,            // تتحرك من الأسفل
      opacity: 0,        // تبدأ من الشفافية
      rotateX: -90,      // إضافة تأثير 3D خفيف
      stagger: 0.1,      // الفارق الزمني بين كل حرف وحرف
      duration: 1,
      ease: "power4.out",
    })
    // 2. الانتظار (تقليص المدة قليلاً لجعل الـ UX أسرع)
    .to({}, { duration: 0.8 })
    // 3. تأثير المربعات (Stairs Effect)
    .to(".overlay-bar", {
      height: "100%",
      stagger: 0.1,
      duration: 1.5,
      ease: "power4.inOut",
    })
    .to(container.current, {
      display: "none"
    });

  }, { scope: container });

  return (
    <div ref={container} className="intro-container">
      <div className="overlay-container">
        {[...Array(10)].map((_, i) => ( // زدت عدد المربعات ليكون التأثير أنعم
          <div key={i} className="overlay-bar"></div>
        ))}
      </div>

      <div className="name-wrapper">
        <h1 className="hero-name">
          {/* تقسيم كلمة NABIL إلى حروف */}
          {"NABIL".split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Intro3D;