import { useParams } from "react-router-dom";
import locations from "../../datas/location.json";
// Composents
import Tag from "../../components/Utils/tag.jsx";
import Host from "../../components/Utils/host.jsx";
import Stars from "../../components/Utils/stars.jsx";
import Dropdown from "../../components/Dropdown";

function Location() {
  const { logementId } = useParams();
  const location = locations.find((location) => location.id === logementId);
  return (
    <section>
      <img src={location.cover} alt="" />
      <div className="section-title">
        <h1>{location.title}</h1>
        <p>{location.location}</p>
      </div>
      <Host location={location} />
      <Stars location={location} />
      <Tag location={location} />
      <Dropdown data={location} selectedKey="description" />
      <Dropdown data={location} selectedKey="equipments" />
    </section>
  );
}

export default Location;
