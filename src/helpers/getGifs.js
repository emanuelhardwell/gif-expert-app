export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=8&api_key=EMkLUTqDMhIksWGffC42PtHNNshPjgwj`;

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

  //   console.log(gifs);
  //   setImages(gifs);
  return gifs;
};
