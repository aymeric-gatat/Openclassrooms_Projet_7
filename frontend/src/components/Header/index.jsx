import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const location = useLocation(); // Utilisez useLocation pour obtenir l'URL actuelle

  return (
    <header>
      <img src={logo} alt="Kasa, trouver votre logement" className="logo" />
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Accueil
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>
          À Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
