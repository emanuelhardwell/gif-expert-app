//
//

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((gif) => {
      console.log(gif);

      setState({
        data: gif,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
