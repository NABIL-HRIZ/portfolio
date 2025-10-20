import React from 'react';
import { FaHome, FaFolder, FaWrench, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const navItems = [
    {
      title: "Accueil",
      icon: <FaHome className="nav-icon" />,
      path: "#accueil"
    },
    {
      title: "Projets",
      icon: <FaFolder className="nav-icon" />,
      path: "#projects-section"
    },
    {
      title: "Outils",
      icon: <FaWrench className="nav-icon" />,
      path: "#tools"
    },
    {
      title: "Éducation",
      icon: <FaBriefcase className="nav-icon" />,
      path: "#diplomes"
    },
    {
      title: "Contact",
      icon: <FaEnvelope className="nav-icon" />,
      path: "#contact"
    }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.path} className="nav-link">
                {item.icon}
               
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;