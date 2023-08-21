import startActive from "../../assets/star-active.png";
import startInactive from "../../assets/star-inactive.png";

function Stars({ location }) {
  const numStars = Math.min(Math.round(location.rating), 5); // Assurer un maximum de 5 étoiles

  return (
    <div className="section-rating">
      {Array.from({ length: numStars }).map((_, index) => (
        <img key={index} className="star-active" src={startActive} alt="étoile de notation pleine" />
      ))}
      {Array.from({ length: Math.max(5 - numStars, 0) }).map((_, index) => (
        <img key={index} className="star-inactive" src={startInactive} alt="étoile de notation vide" />
      ))}
    </div>
  );
}

export default Stars;
