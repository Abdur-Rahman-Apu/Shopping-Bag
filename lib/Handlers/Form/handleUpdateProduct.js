import {
  getFromLocalStorage,
  setProductIntoLocalStorage,
} from "../../../utils/localStorage.js";
import { updateFormSubmitButton } from "../../../utils/UpdateUI.js";
import { formSubmitBtn } from "../../HtmlElements/elements.js";
import { showShoppingItems } from "../../UI/shopItem.js";
import { showToastMsg } from "../../UI/toastMsg.js";

// Handle update a product
export default function handleUpdateProduct(newProduct) {
  // get the product id which need to be updated
  const id = formSubmitBtn.getAttribute("productid");

  // update the product array into the storage, {}-> new product, true means we are trying to update a product
  setProductIntoLocalStorage({ id, ...newProduct }, true);

  // show new shopping list into the DOM, true means need to update the DOM
  showShoppingItems(getFromLocalStorage("products"), true);

  // Set submit button text to Submit
  updateFormSubmitButton("Submit");

  // Show toast message for success action
  showToastMsg("Product Updated Successfully", "success", 3000);
}
