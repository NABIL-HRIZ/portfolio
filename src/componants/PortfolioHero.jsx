import React from "react";
import "../styles/PortfolioHero.css";
import myPhoto from "../assets/my-picc.png";

const PortfolioHero = () => {
  return (
    <section className="hero-container">
      {/* Top Badge: Online Status */}
      <div className="status-badge">
        <span className="dot"></span> Available for new opportunities
      </div>

      <div className="hero-grid">
        {/* COLUMN 1: IDENTITY */}
        <div className="hero-column column-left">
          <div className="identity-block">
            
            <h1 className="main-name">NABIL<br />HRIZ</h1>
            <p className="sub-role">FULL-STACK DEVELOPER</p>
          </div>
        </div>

        {/* COLUMN 2: CENTER IMAGE */}
        <div className="hero-column column-center">
          <div className="image-frame">
            <img src={myPhoto} alt="NABIL HRIZ" className="hero-main-img" />
          </div>
        </div>

        {/* COLUMN 3: MODERN DETAILS (Top & Bottom) */}
        <div className="hero-column column-right">
          {/* Top Div */}
          <div className="info-box top-box">
            <h3 className="box-label">Specialization</h3>
            <p className="box-text">
              Building Modern & Innovative <br /> 
              solutions with React, Laravel <br /> 
              & Spring Boot.
            </p>
          </div>

          {/* Bottom Div */}
          <div className="info-box bottom-box">
            <h2 className="massive-role">CREATIVE<br/>DEV</h2>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;