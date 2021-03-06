import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente AddCategory.js", () => {
  // wrapper global
  //   const setCategories = () => {};
  const setCategories = jest.fn(); //simula una funcion
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

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

  test("Deberia de no ejecurase la funcion SETCATEGORIES porque el input esta vacio", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  // 1.- simular el inputchange
  // 2.- simular el submit
  // 3.- setCategories se debe de haber llamado
  // 4.- el valor del input debe de estar vacio ""
  test("Deberia de ejecutarse la funcion SUBMIT", () => {
    const value = "Hola bebe";

    wrapper.find("input").simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);

    // expect(wrapper.find("p").text().trim()).toBe("");
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
