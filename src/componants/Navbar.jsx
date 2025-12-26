import React from "react";
import my8logo from "../assets/my-logo.png";
import BubbleMenu from "./NewMenu";

const Navbar = () => {
  const items = [
    { label: "Accueil", href: "#accueil", rotation: -8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: "À propos", href: "#a-propos", rotation: 8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: "Projets", href: "#projects-section", rotation: 8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: "Outils", href: "#tools", rotation: 8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: "Éducation", href: "#diplomes", rotation: -8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: "Contact", href: "#contact", rotation: -8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } }
  ];

  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 2000}}>
      <BubbleMenu
        logo={<img src={my8logo} alt="Nabil Logo" style={{ height: "40px" }} />}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </header>
  );
};

export default Navbar;
