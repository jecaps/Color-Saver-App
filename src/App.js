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
  const [allowEdit, setAllowEdit] = useState(false);

  const addColorCard = (color) => {
    setColorList([
      ...colorList,
      { id: nanoid(), hexColor: color.toUpperCase() },
    ]);
  };

  const deleteColorCard = (colordId) => {
    setColorList(colorList.filter((color) => color.id !== colordId));
  };

  const isEditAllowed = () => {
    setAllowEdit(!allowEdit);
  };

  const changeTitle = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
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
      <main className="main">
        <section className="page">
          <h1 className="title">Coolorette</h1>
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
            {colorListElement}
            <Form addColor={addColorCard} />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
