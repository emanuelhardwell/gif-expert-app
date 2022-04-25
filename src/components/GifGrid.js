import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=goku&limit=8&api_key=EMkLUTqDMhIksWGffC42PtHNNshPjgwj";
    const resp = await fetch(url);
    const { data } = await resp.json();
    // console.log(data);

    const gifs = data.map((image) => {
      return {
        id: image.id,
        title: image.title,
        url: image.images?.downsized?.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  // RETURN
  return (
    <>
      <h3 className="text-center"> {category} </h3>
      <div className="container">
        <div className="row bg-dark">
          <div className="col-md-4 mb-3">
            {images.map((img) => (
              <GifGridItem key={img.id} {...img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
