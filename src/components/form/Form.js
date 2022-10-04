import { useState } from "react";

function Form({ addColor }) {
  const [pickedColor, setPickedColor] = useState("#C3C3C3");

  const onAddColor = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addColor(pickedColor.toUpperCase());
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
      <div className="form__input-container">
        <input
          className="form__input"
          id="color"
          type="color"
          defaultValue={pickedColor}
          onInput={colorPickerHandler}
        />
        <span className="form__tooltip">Pick Color</span>
      </div>
      <input
        className="form__text"
        id="text"
        type="text"
        defaultValue={pickedColor}
        onChange={colorPickerHandler}
      />
      <button className="form__btn" type="submit">
        +
      </button>
    </form>
  );
}

export default Form;
