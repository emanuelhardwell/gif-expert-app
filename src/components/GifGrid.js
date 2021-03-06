import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     getGifs(category).then((gif) => setImages(gif));
  //   }, []);

  //   const getGifs = async () => {
  //     const url =
  //       "https://api.giphy.com/v1/gifs/search?q=goku&limit=8&api_key=EMkLUTqDMhIksWGffC42PtHNNshPjgwj";
  //     const resp = await fetch(url);
  //     const { data } = await resp.json();
  //     // console.log(data);

  //     const gifs = data.map((image) => {
  //       return {
  //         id: image.id,
  //         title: image.title,
  //         url: image.images?.downsized?.url,
  //       };
  //     });

  //     console.log(gifs);
  //     setImages(gifs);
  //   };

  //   SE EMPIEZA A UTILIZAR EL CUSTOM HOOK
  const { data: images, loading } = useFetchGifs(category);

  // RETURN
  return (
    <>
      <h3 className="text-center"> {category} </h3>
      {loading && <p>Cargando data</p>}
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
