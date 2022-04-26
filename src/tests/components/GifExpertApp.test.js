import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from "../../GifExpertApp";

describe("Pruebas en el componente GifExpertApp.js", () => {
  test("Deberia estar el snapshot cprrectamente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Deberia estar el snapshot cprrectamente y mostrar el numero de GIFGRID", () => {
    const defaultCategories = ["Goku", "Kakaroto", "Vegeta"];

    const wrapper = shallow(
      <GifExpertApp defaultCategories={defaultCategories} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(defaultCategories.length);
  });
});
