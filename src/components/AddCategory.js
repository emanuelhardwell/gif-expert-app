import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("handleInputChange ...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Se hace de esta forma ya que unicamente estamos pasando la FUNCION setCategories
    // y usamos un CALLBACK para tener la referencia de de las categorias en este caso
    // o bien podriamos pasar por las PROPS a CATEGORIES y quedaria asi ------ >
    //setCategories([...categories, "HunterXHunter"]);

    console.log("handleSubmit ...");
    console.log("---- " + inputValue + " ----");

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  // RETURN
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{inputValue}</p>
        <input
          className="form-control"
          type="text"
          name="buscar"
          placeholder="Buscar por categoria"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
