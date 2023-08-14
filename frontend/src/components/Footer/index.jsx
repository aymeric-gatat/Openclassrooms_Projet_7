import { Link } from "react-router-dom";
import logo from "../../assets/logo-blanc.png";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="logo Kasa blanc" />
      </Link>
      <p>©️ 2020 Kasa. All rights reserverd</p>
    </footer>
  );
}

export default Footer;
