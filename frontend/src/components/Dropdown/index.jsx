import React, { useState } from "react";

function Dropdown({ data, selectedKey }) {
  const [isOpenList, setIsOpenList] = useState(new Array(data.length).fill(false));

  const toggleDropdown = (index) => {
    const updatedIsOpenList = [...isOpenList];
    updatedIsOpenList[index] = !updatedIsOpenList[index];
    setIsOpenList(updatedIsOpenList);
  };

  if (!Array.isArray(data)) {
    return (
      <ul className="dropdown">
        {!Array.isArray(data[selectedKey]) && (
          <li onClick={() => toggleDropdown(0)}>
            <p className={`dropDownList ${isOpenList[0] ? "haut" : "bas"}`}>{selectedKey === "description" ? "Description" : selectedKey === "equipments" ? "Equipements" : selectedKey}</p>
            {isOpenList[0] && <p className="dropDownText">{data[selectedKey]}</p>}
          </li>
        )}

        {Array.isArray(data[selectedKey]) && (
          <li onClick={() => toggleDropdown(0)}>
            <p className={`dropDownList ${isOpenList[0] ? "haut" : "bas"}`}>{selectedKey === "description" ? "Description" : selectedKey === "equipments" ? "Equipements" : selectedKey}</p>
            {/*{isOpenList[0] && <p className="dropDownText">{data[selectedKey]}</p>}*/}
            {isOpenList[0] && (
              <p className="dropDownText">
                {data[selectedKey].map((item, index) => (
                  <span key={index + 1}>{item}</span>
                ))}
              </p>
            )}
          </li>
        )}
      </ul>
    );
  } else {
    return (
      <ul className="dropdown">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <li key={index} onClick={() => toggleDropdown(index)}>
              <p className={`dropDownList ${isOpenList[index] ? "haut" : "bas"}`}>{item.name}</p>
              {isOpenList[index] && <p className="dropDownText">{item.content}</p>}
            </li>
          ))}
      </ul>
    );
  }
}

export default Dropdown;
