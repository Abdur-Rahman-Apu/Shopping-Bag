import handleForm from "../Handlers/Form/handleForm.js";
import handleProductName from "../Handlers/Form/handleProductName.js";
import handleProductPrice from "../Handlers/Form/handleProductPrice.js";
import { handleEditAndDelete } from "../Handlers/Shopping/handleEditAndDelete.js";
import {
  form,
  productNameElm,
  productPriceElm,
  shoppingListContainer,
} from "../HtmlElements/elements.js";

const eventListeners = () => {
  form.addEventListener("submit", handleForm);
  productNameElm.addEventListener("keyup", handleProductName);
  productPriceElm.addEventListener("keyup", handleProductPrice);
  shoppingListContainer.addEventListener("click", handleEditAndDelete);
};

export default eventListeners;
