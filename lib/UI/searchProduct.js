import { getFromLocalStorage } from "../../utils/localStorage.js";
import { lowerCase } from "../../utils/stringFun.js";
import { showShoppingItems } from "./shopItem.js";

// To show search product
export default function searchProduct(name) {
  let products = getFromLocalStorage("products");

  if (name) {
    // if name exist, then filter products
    products = products.filter((product) =>
      lowerCase(product.name).includes(lowerCase(name))
    );
  }

  // show into the ui, products: products array and true means we are trying to update the dom.
  showShoppingItems(products, true);
}
