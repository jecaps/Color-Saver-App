import { nanoid } from "nanoid";

import { useState } from "react";
import { colorsData } from "./assets/color";

import Form from "./components/form/Form";
import ColorCard from "./components/colorCard/ColorCard";

import "./App.css";

function App() {
  const [colorList, setColorList] = useState(colorsData);

  const addColorCard = (color) => {
    setColorList([
      ...colorList,
      { id: nanoid(), hexColor: color.toUpperCase() },
    ]);
  };

  const colorListElement = colorList.map((color) => (
    <ColorCard key={color.id} colorCode={color.hexColor} />
  ));

  return (
    <>
      <Form addColor={addColorCard} />
      <ul className="cards">{colorListElement}</ul>;
    </>
  );
}

export default App;
