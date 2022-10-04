// import { nanoid } from "nanoid";

import { useState, useEffect } from "react";
import { colorsData } from "./assets/color";

import Cards from "./pages/Cards";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

import "./App.css";

function App() {
  const [palettesList, setPalettesList] = useState(
    loadFromLocal("saved palettes") ?? colorsData
  );

  const colorPalettes = palettesList.map((palette) => (
    <Cards
      key={palette.id}
      paletteId={palette.id}
      paletteTitle={palette.title}
      paletteColors={palette.colors}
      palettesList={palettesList}
      setPalettesList={setPalettesList}
    />
  ));

  useEffect(() => {
    saveToLocal("saved palettes", palettesList);
  }, [palettesList]);

  return (
    <>
      <main className="main">
        <h1 className="title">Coolorette</h1>
        <ul className="palettes">{colorPalettes}</ul>
      </main>
    </>
  );
}

export default App;
