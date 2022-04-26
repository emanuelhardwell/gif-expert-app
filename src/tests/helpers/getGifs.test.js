import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en el HELPER getGifs.js", () => {
  test("Deberia devolverme un arreglo de 8 elementos el FETCH", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(8);
  });

  test("Deberia devolverme un arreglo de 0 elementos el FETCH porque no mande la palabra a buscar", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
