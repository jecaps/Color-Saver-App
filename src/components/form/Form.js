import { useState } from "react";

function Form({ addColor }) {
  const [pickedColor, setPickedColor] = useState("#000000");

  console.log(pickedColor);

  const onAddColor = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addColor(pickedColor);
    setPickedColor("#000000");
    e.target.reset();
  };

  const colorPickerHandler = (e) => {
    setPickedColor(e.target.value);
  };

  return (
    <form
      action=""
      type="submit"
      className="form"
      style={{ backgroundColor: pickedColor }}
      onSubmit={onAddColor}
    >
      <input
        className="form__input"
        id="color"
        type="color"
        defaultValue={pickedColor}
        onInput={colorPickerHandler}
      />
      <input
        className="form__text"
        id="text"
        type="text"
        defaultValue={pickedColor}
        onChange={colorPickerHandler}
      />
      <button className="form__btn" type="submit">
        Add Color
      </button>
    </form>
  );
}

export default Form;
