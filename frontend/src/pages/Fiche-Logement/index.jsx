import { useParams } from "react-router-dom";
import Error from "../Error";
import locations from "../../datas/location.json";
// Composents
import Tag from "../../components/Utils/tag.jsx";
import Host from "../../components/Utils/host.jsx";
import Stars from "../../components/Utils/stars.jsx";
import Dropdown from "../../components/Dropdown";
import Carousel from "../../components/Utils/carousel";

function Location() {
  const { logementId } = useParams();
  const location = locations.find((location) => location.id === logementId);
  document.title = `Kasa | ${location.title}`;
  if (!location) {
    return <Error />;
  } else {
    return (
      <main className="logementPage">
        <Carousel data={location} />
        <section className="section-title">
          <h1>{location.title}</h1>
          <p>{location.location}</p>
          <Tag location={location} />
        </section>
        <section className="section-host">
          <Host location={location} />
          <Stars location={location} />
        </section>
        <section className="dropdown">
          <Dropdown data={location} selectedKey="description" className="section-dropdown-description" />
          <Dropdown data={location} selectedKey="equipments" className="section-dropdown-equipments" />
        </section>
      </main>
    );
  }
}

export default Location;
