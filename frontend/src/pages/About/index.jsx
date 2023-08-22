import Entete from "../../components/Entete";
import DropDown from "../../components/Dropdown";
import Questions from "../../datas/questions.json";

function About() {
  document.title = "À Propos de Kasa";
  return (
    <div className="App">
      <div className="container container-about">
        <Entete />
        <DropDown data={Questions} />
      </div>
    </div>
  );
}

export default About;
