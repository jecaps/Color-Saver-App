import { useState } from "react";

function Form({ addColor }) {
  const [pickedColor, setPickedColor] = useState("#D3D0CB");

  const onAddColor = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addColor(pickedColor);
    setPickedColor("#D3D0CB");
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
