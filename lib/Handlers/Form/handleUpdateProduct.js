import {
  getFromLocalStorage,
  setProductIntoLocalStorage,
} from "../../../utils/localStorage.js";
import { updateFormSubmitButton } from "../../../utils/UpdateUI.js";
import { formSubmitBtn } from "../../HtmlElements/elements.js";
import { showShoppingItems } from "../../UI/shopItem.js";
import { showToastMsg } from "../../UI/toastMsg.js";

export default function handleUpdateProduct(newProduct) {
  const id = formSubmitBtn.getAttribute("productid");
  console.log(id, "id");
  setProductIntoLocalStorage({ id, ...newProduct }, true);

  showShoppingItems(getFromLocalStorage("products"), true);

  updateFormSubmitButton("Submit");

  showToastMsg("Product Updated Successfully", "success", 3000);
}
