// import { nanoid } from "nanoid";

import { useState, useEffect } from "react";
import { colorsData } from "./assets/color";

// import Form from "./components/form/Form";
// import ColorCard from "./components/colorCard/ColorCard";
import Cards from "./pages/Cards";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

import "./App.css";

function App() {
  const [palettesList, setPalettesList] = useState(
    loadFromLocal("saved palettes") ?? colorsData
  );

  console.log(palettesList);

  // const addColorCard = (color) => {
  //   setPalettesList([
  //     ...palettesList,
  //     { id: nanoid(), hexColor: color.toUpperCase() },
  //   ]);
  // };

  // const deleteColorCard = (colordId) => {
  //   setPalettessList(palettesList.filter((color) => color.id !== colordId));
  // };

  // const isEditAllowed = () => {
  //   setAllowEdit(!allowEdit);
  // };

  // const changeTitle = (e) => {
  //   e.preventDefault();
  //   const form = new FormData(e.target);
  //   console.log(form);
  // };

  // const palettesListElement = palettesList.map((color) => (
  //   <ColorCard
  //     key={color.id}
  //     id={color.id}
  //     colorCode={color.hexColor}
  //     deleteColor={deleteColorCard}
  //   />
  // ));

  const colorPalette = palettesList.map((palette) => (
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
        {/* <li className="page">
          <form
            action=""
            type="submit"
            className="colors"
            onSubmit={changeTitle}
          >
            <input
              type="text"
              className="colors__title"
              defaultValue={"Color Palette 1"}
              readOnly={allowEdit ? "" : "readonly"}
            />
            <button
              type={allowEdit ? "submit" : "button"}
              className="colors__btn"
              onClick={isEditAllowed}
            >
              {allowEdit ? "save" : "edit"}
            </button>
          </form>
          <ul className="cards">
            {palettesListElement}
            <Form addColor={addColorCard} />
          </ul>
        </li> */}
        {colorPalette}
      </main>
    </>
  );
}

export default App;
