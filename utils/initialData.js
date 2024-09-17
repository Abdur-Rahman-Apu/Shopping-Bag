import { countElm } from "../lib/HtmlElements/elements.js";
import { showShoppingItems } from "../lib/UI/shopItem.js";
import { getFromLocalStorage, setIntoLocalStorage } from "./localStorage.js";
import { setText } from "./UpdateUI.js";

const initialData = () => {
  const products = getFromLocalStorage("products") || [];

  setIntoLocalStorage("products", products);

  showShoppingItems(products);

  setText(countElm, products.length);
};

export default initialData;
