import { countElm } from "../lib/HtmlElements/elements.js";
import { getFromLocalStorage, setIntoLocalStorage } from "./localStorage.js";
import { setText } from "./UpdateUI.js";

const initialData = () => {
  const products = getFromLocalStorage("products") || [];

  setIntoLocalStorage("products", products);

  setText(countElm, products.length);
};

export default initialData;
