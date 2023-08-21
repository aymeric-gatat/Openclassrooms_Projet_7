import Container from "../../components/Container";
import Entete from "../../components/Entete";

function Home() {
  document.title = "Kasa | Accueil";
  return (
    <div className="App">
      <Entete />
      <Container />
    </div>
  );
}

export default Home;
