import { nanoid } from "nanoid";

import { useState, useEffect } from "react";
import { colorsData } from "./assets/color";

import Form from "./components/form/Form";
import ColorCard from "./components/colorCard/ColorCard";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

import "./App.css";

function App() {
  const [colorList, setColorList] = useState(
    loadFromLocal("saved colors") ?? colorsData
  );

  const addColorCard = (color) => {
    setColorList([
      ...colorList,
      { id: nanoid(), hexColor: color.toUpperCase() },
    ]);
  };

  const deleteColorCard = (colordId) => {
    setColorList(colorList.filter((color) => color.id !== colordId));
  };

  const colorListElement = colorList.map((color) => (
    <ColorCard
      key={color.id}
      id={color.id}
      colorCode={color.hexColor}
      deleteColor={deleteColorCard}
    />
  ));

  useEffect(() => {
    saveToLocal("saved colors", colorList);
  }, [colorList]);

  return (
    <>
      <ul className="cards">
        {colorListElement}
        <Form addColor={addColorCard} />
      </ul>
      ;
    </>
  );
}

export default App;
