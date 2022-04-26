// Debe mostrar el componente correctamente
//shalow
// wrapper
//wrapper.toMatchSnapshot

import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Prueba en <GifGridItem />", () => {
  const title = "title de la imagen";
  const url = "http://localhost/url-de-la-imagen.jpg";

  test("should mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
