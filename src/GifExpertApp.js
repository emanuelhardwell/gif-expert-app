import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "HunterXHunter"]);
  //   // forma 2 de hacerlo
  //   // setCategories((cats) => [...cats, "HunterXHunter"]);
  // };

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
          <div className="col-md-4">
            <AddCategory setCategories={setCategories} />
          </div>
        </div>

        <div className="row mt-3  bg-primary">
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </div>

        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-primary"> Agregar category </button>
          </div>
        </div>
      </div>
    </div>
  );
};
