import React from "react";
import Locations from "../../datas/location.json";

import { Link } from "react-router-dom";

function Container() {
  const locations = Locations;

  return (
    <main>
      <div className="container">
        {/* Afficher les locations */}
        {locations.map((location) => (
          <div className="location" key={location.id}>
            <Link to={"/logement/" + location.id}>
              <p className="title-location">{location.title}</p>
            </Link>
            <img src={location.cover} alt={location.title} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Container;
