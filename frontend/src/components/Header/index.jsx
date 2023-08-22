import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    if (!window.location.pathname.includes("logement")) {
      setActiveLink(link);
    }
  };

  return (
    <header>
      <img src={logo} alt="Kasa, trouver votre logement" className="logo" />
      <nav>
        <Link to="/" className={activeLink === "accueil" ? "activeLink" : ""} onClick={() => handleLinkClick("accueil")}>
          Accueil
        </Link>
        <Link to="/about" className={activeLink === "about" ? "activeLink" : ""} onLoad={() => handleLinkClick("about")}>
          À Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
