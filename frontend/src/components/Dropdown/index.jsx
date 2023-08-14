import React, { useState, useEffect } from "react";
import Questions from "../../datas/questions.json";

const Dropdown = () => {
  const [modules, setModules] = useState(Questions);
  const [dropdownClass, setDropdownClass] = useState("");

  const handleModuleClick = (index) => {
    setModules((prevModules) =>
      prevModules.map((module, i) => {
        if (i === index) {
          return {
            ...module,
            isOpen: !module.isOpen,
          };
        }
        return module;
      })
    );
  };

  useEffect(() => {
    if (window.location.href.includes("/about") || window.location.href.includes("/logement")) {
      setDropdownClass("dropdown");
    } else {
      setDropdownClass("");
    }
  }, []);

  return (
    <ul>
      {modules.map((module, index) => {
        const fleche = module.isOpen ? "haut" : "bas"; // Détermine la valeur de la flèche
        return (
          <li key={index} className={dropdownClass}>
            <p onClick={() => handleModuleClick(index)} className={`dropDownList ${fleche}`}>
              {module.name}
            </p>
            {module.isOpen && <p className="dropDownText">{module.content}</p>}
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
