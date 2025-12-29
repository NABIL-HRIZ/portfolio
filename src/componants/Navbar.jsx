import React from "react";
import my8logo from "../assets/my-logo.png";
import BubbleMenu from "./NewMenu";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const items = [
    { label: t('nav.accueil'), href: "#accueil", rotation: -8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: t('nav.apropos'), href: "#a-propos", rotation: 8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: t('nav.projets'), href: "#projects-section", rotation: 8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: t('nav.outils'), href: "#tools", rotation: 8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: t('nav.diplomes'), href: "#diplomes", rotation: -8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } },
    { label: t('nav.contact'), href: "#contact", rotation: -8, hoverStyles: { bgColor: "rgba(18, 65, 70, 0.85)", textColor: "#ffffff" } }
  ];

 

  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px'}}>
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
