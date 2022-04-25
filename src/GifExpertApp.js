import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setCategories([...categories, "HunterXHunter"]);
    // forma 2 de hacerlo
    // setCategories((cats) => [...cats, "HunterXHunter"]);
  };

  //   RETURN
  return (
    <div className="m-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">GifExpertApp</h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <AddCategory />
          </div>
        </div>

        <div className="row">
          <ol>
            {categories.map((category) => (
              <li key={category}> {category} </li>
            ))}
          </ol>
        </div>

        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-primary" onClick={handleAdd}>
              {" "}
              Agregar category{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
