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
  /* 
  updateFormSubmitButton: Update Submit button properties 
  Update: Set submit button value to Update, 
  true: A flag to perform update related task
  id: product id
  */
  updateFormSubmitButton("Update", true, id);

  // Change the backgroundColor of the submit button for edit purpose
  setStyleIntoTheUI(formSubmitBtn, { backgroundColor: "#82CCDD" });

  const products = getFromLocalStorage("products");

  // find the specific product
  const product = products.find((product) => product.id == id);

  if (product) {
    // if product exist, set the products value into the inputs
    productNameElm.value = product.name;
    productPriceElm.value = product.price;
  }
};

export { editProduct };
