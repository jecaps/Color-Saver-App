import { useState } from "react";
import { colorsData } from "./assets/color";

import ColorCard from "./components/colorCard/ColorCard";

import "./App.css";

function App() {
  const [colorList, setColorList] = useState(colorsData);

  const colorsEl = colorList.map((color) => (
    <ColorCard key={color.id} colorCode={color.hexColor} />
  ));

  return <ul className="cards">{colorsEl}</ul>;
}

export default App;
