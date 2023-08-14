import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa, trouver votre logement" className="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
