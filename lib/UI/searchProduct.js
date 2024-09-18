import { getFromLocalStorage } from "../../utils/localStorage.js";
import { lowerCase } from "../../utils/stringFun.js";
import { showShoppingItems } from "./shopItem.js";

export default function searchProduct(name) {
  let products = getFromLocalStorage("products");
  if (name) {
    products = products.filter((product) =>
      lowerCase(product.name).includes(lowerCase(name))
    );
  }

  showShoppingItems(products, true);
}
