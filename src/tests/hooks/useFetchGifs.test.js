import "@testing-library/jest-dom";

import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el HOOK useFetchGifs.js", () => {
  // Actualmente en React 18 NO FUNCIONA la libreria @testing-library/react-hooks
  test("Debe retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { data, loading } = result.current;

    console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
