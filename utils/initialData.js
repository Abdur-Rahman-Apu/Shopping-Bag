import { showShoppingItems, updateTotalProductNo } from "../lib/UI/shopItem.js";
import { getFromLocalStorage, setIntoLocalStorage } from "./localStorage.js";

const initialData = () => {
  const products = getFromLocalStorage("products") || [];

  setIntoLocalStorage("products", products);

  showShoppingItems(products);

  updateTotalProductNo();
};

export default initialData;
