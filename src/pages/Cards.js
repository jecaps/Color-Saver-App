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

  const addColorCard = (color) => {
    // palettesList
    //   .filter((palette) => paletteId === palette.id)[0]
    //   .colors.push({ id: nanoid(), hexCode: color });
    palettesList = palettesList.map((palette) =>
      paletteId === palette.id
        ? {
            ...palette,
            colors: [...palette.colors, { id: nanoid(), hexCode: color }],
          }
        : { ...palette }
    );
    setPalettesList([...palettesList]);
  };

  // const deleteColorCard = (colordId) => {
  //   setColorList(colorList.filter((color) => color.id !== colordId));
  // };

  const isEditAllowed = () => {
    setAllowEdit(!allowEdit);
  };

  const changeTitle = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
  };

  const colorListItems = paletteColors.map((color) => (
    <ColorCard
      key={color.id}
      id={color.id}
      colorCode={color.hexCode}
      // deleteColor={deleteColorCard}
    />
  ));

  // useEffect(() => {}, [colorList]);

  return (
    <li className="page">
      <form action="" type="submit" className="colors" onSubmit={changeTitle}>
        <input
          type="text"
          className="colors__title"
          defaultValue={paletteTitle}
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
        {colorListItems}
        <Form addColor={addColorCard} />
      </ul>
    </li>
  );
}

export default Cards;
