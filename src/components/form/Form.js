import { useState } from "react";

function Form() {
  const [colorPicked, setColorPicked] = useState("#000000");

  const colorPickerHandler = (e) => {
    setColorPicked(e.target.value);
  };

  return (
    <form
      action=""
      type="submit"
      className="form"
      style={{ backgroundColor: colorPicked }}
    >
      <input
        className="form__input"
        type="color"
        defaultValue={colorPicked}
        onChange={colorPickerHandler}
      />
      <p className="form__text">{colorPicked}</p>
      <button type="submit">Add Color</button>
    </form>
  );
}

export default Form;
