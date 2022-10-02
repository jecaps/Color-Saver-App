import { useState } from "react";
import { colorsData } from "./assets/color";

import Form from "./components/form/Form";
import ColorCard from "./components/colorCard/ColorCard";

import "./App.css";

function App() {
  const [colorList, setColorList] = useState(colorsData);

  const colorListElement = colorList.map((color) => (
    <ColorCard key={color.id} colorCode={color.hexColor} />
  ));

  return (
    <>
      <Form />
      <ul className="cards">{colorListElement}</ul>;
    </>
  );
}

export default App;
