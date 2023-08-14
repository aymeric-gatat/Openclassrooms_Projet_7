import imgAbout from "../../assets/bg-about.png";
import imgHome from "../../assets/bg-home.png";

function Entete() {
  let url;
  if (window.location.href.includes("/about")) {
    url = imgAbout;
  } else if (window.location.href.includes("/")) {
    url = imgHome;
  }
  return (
    <div className="home-container" style={{ backgroundImage: `url(${url})` }}>
      <h1> Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Entete;
