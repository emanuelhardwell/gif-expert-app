// Debe mostrar el componente correctamente
//shalow
// wrapper
//wrapper.toMatchSnapshot

import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Prueba en <GifGridItem />", () => {
  const title = "title de la imagen";
  const url = "http://localhost/url-de-la-imagen.jpg";
  const claseCss = "card-img-top";

  // Se puede poner el WRAPPER de forma global para que se pueda reutilizar en todos los TEST que pertenesca a este
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Deberia mostrar el parrafo P igual", () => {
    const res = wrapper.find("p");
    expect(res.text().trim()).toBe(title);
  });

  test("Deberia tener los PROPS de SRC y ALT", () => {
    const imagen = wrapper.find("img");

    console.log(imagen.html());

    console.log(imagen.prop("src"));

    expect(imagen.prop("src")).toBe(url);
    expect(imagen.prop("alt")).toBe(title);
  });

  test("Deberia tener los PROPS de CLASSNAME", () => {
    const imagen = wrapper.find("img");

    console.log(imagen.prop("className"));

    expect(imagen.prop("className")).toBe(claseCss);
  });

  test("Deberia tener los PROPS de CLASSNAME ---> forma 2", () => {
    const imagen = wrapper.find("img");

    const className = imagen.prop("className");
    console.log(className);

    expect(className.includes("card-img-top")).toBe(true);
  });
});
