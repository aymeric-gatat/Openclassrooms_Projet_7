import Entete from "../../components/Entete";
import DropDown from "../../components/Dropdown";

function About() {
  return (
    <div className="App">
      <Entete />
      <div className="container container-about">
        <DropDown dropdownClass="dropdown" />
      </div>
    </div>
  );
}

export default About;
