import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente AddCategory.js", () => {
  // wrapper global
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("Deberia mostrarse el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Deberia de ejecutarse mi funcion handleInputChange", () => {
    const value = "Hola bebe";

    const input = wrapper.find("input");
    // Cuando una funcion necesita un ARGUMENTO, este se debe pasar como segundo parametro en el SIMULATE
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });
});
