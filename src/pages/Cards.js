import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import ColorCard from "../components/colorCard/ColorCard";
import Form from "../components/form/Form";

function Cards({
  paletteId,
  paletteTitle,
  paletteColors,
  palettesList,
  setPalettesList,
}) {
  const [allowEdit, setAllowEdit] = useState(false);
  const [paletteName, setPaletteName] = useState(paletteTitle);

  const addColorCard = (color) => {
    setPalettesList(
      palettesList.map((palette) =>
        paletteId === palette.id
          ? {
              ...palette,
              colors: [...palette.colors, { id: nanoid(), hexCode: color }],
            }
          : { ...palette }
      )
    );
  };

  const deleteColorCard = (colordId) => {
    setPalettesList(
      palettesList.map((palette) =>
        paletteId === palette.id
          ? {
              ...palette,
              colors: palette.colors.filter((color) => color.id !== colordId),
            }
          : { ...palette }
      )
    );
  };

  const isEditAllowed = () => {
    setAllowEdit(!allowEdit);
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setPaletteName(e.target.value);
  };

  const changeTitle = (e) => {
    e.preventDefault();

    setPalettesList(
      palettesList.map((palette) =>
        paletteId === palette.id
          ? {
              ...palette,
              title: paletteName,
            }
          : { ...palette }
      )
    );
  };

  const colorListItems = paletteColors.map((color) => (
    <ColorCard
      key={color.id}
      id={color.id}
      colorCode={color.hexCode}
      deleteColor={deleteColorCard}
    />
  ));

  useEffect(() => {}, [paletteName]);

  return (
    <li className="page">
      <form action="" type="submit" className="colors" onSubmit={changeTitle}>
        <input
          type="text"
          id="palette__title"
          className="colors__title"
          defaultValue={paletteName}
          readOnly={allowEdit ? "" : "readonly"}
          onInput={inputHandler}
        />
        <button
          type={allowEdit ? "button" : "submit"}
          className="colors__btn"
          onClick={isEditAllowed}
        >
          {allowEdit ? "save" : "edit"}
        </button>
      </form>
      <ul className="cards">
        {colorListItems}
        <Form addColor={addColorCard} />
      </ul>
    </li>
  );
}

export default Cards;
