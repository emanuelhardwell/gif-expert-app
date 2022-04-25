import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola mundo");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  // RETURN
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="buscar"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};
