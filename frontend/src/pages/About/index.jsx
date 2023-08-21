import Entete from "../../components/Entete";
import DropDown from "../../components/Dropdown";
import Questions from "../../datas/questions.json";

function About() {
  document.title = "À Propos de Kasa";
  return (
    <div className="App">
      <Entete />
      <div className="container container-about">
        <DropDown data={Questions} />
      </div>
    </div>
  );
}

export default About;
