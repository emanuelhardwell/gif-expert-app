import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

//
describe("Pruebas en el componente GifGrid.js", () => {
  const category = "One Punch";

  test("should mostrar el snapshot correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should mostrar el snapshot correctamente, ya con una CATEGORY", () => {
    const gifs = [
      { id: "abc", title: "paco el chato", url: "http://example.com/paco.jpg" },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should mostrar el snapshot correctamente, ya con una CATEGORY... forma MAS ROBUSTA", () => {
    const gifs = [
      { id: "abc", title: "paco el chato", url: "http://example.com/paco.jpg" },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
