import "@testing-library/jest-dom";

import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el HOOK useFetchGifs.js", () => {
  // Actualmente en React 18 NO FUNCIONA la libreria @testing-library/react-hooks
  test("Debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();
    console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );

    await waitForNextUpdate();
    const { data, loading } = result.current;
    console.log(data, loading);

    expect(data.length).toBe([8]);
    expect(loading).toBe(false);
  });
});
