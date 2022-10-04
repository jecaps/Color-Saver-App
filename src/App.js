import { useState, useEffect } from "react";

import Cards from "./pages/Cards";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [palettesList, setPalettesList] = useState(
    loadFromLocal("saved palettes") ?? []
  );

  const addPalette = () => {
    setPalettesList([
      ...palettesList,
      {
        id: nanoid(),
        title: "",
        colors: [],
      },
    ]);
  };

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
        <button className="add-palette" onClick={addPalette}>
          Add New Palette
        </button>
      </main>
    </>
  );
}

export default App;
