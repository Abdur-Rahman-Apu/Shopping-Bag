import { getFromLocalStorage } from "../../utils/localStorage.js";
import {
  setStyleIntoTheUI,
  updateFormSubmitButton,
} from "../../utils/UpdateUI.js";
import {
  formSubmitBtn,
  productNameElm,
  productPriceElm,
} from "../HtmlElements/elements.js";

const editProduct = (id) => {
  updateFormSubmitButton("Update", true, id);

  setStyleIntoTheUI(formSubmitBtn, { backgroundColor: "#82CCDD" });

  const products = getFromLocalStorage("products");

  console.log(products, "products");
  const product = products.find((product) => product.id == id);

  console.log(product, "found product");

  if (product) {
    productNameElm.value = product.name;
    productPriceElm.value = product.price;
  }
};

export { editProduct };
