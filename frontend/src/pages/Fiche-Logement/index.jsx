import { useParams } from "react-router-dom";

function Fiche() {
  const { ficheId } = useParams();
  return (
    <div>
      <h1>Fiche Logement</h1>
      <h2>Logement {ficheId}</h2>
    </div>
  );
}

export default Fiche;
