import handleForm from "../Handlers/Form/handleForm.js";
import handleProductName from "../Handlers/Form/handleProductName.js";
import handleProductPrice from "../Handlers/Form/handleProductPrice.js";
import handleCancelModal from "../Handlers/Modal/handleCancelModal.js";
import handleOkModal from "../Handlers/Modal/handleOkModal.js";
import { handleEditAndDelete } from "../Handlers/Shopping/handleEditAndDelete.js";
import { handleSearchProduct } from "../Handlers/Shopping/handleSearchProduct.js";
import {
  form,
  modalCancelBtn,
  modalOkBtn,
  productNameElm,
  productPriceElm,
  searchElm,
  shoppingListContainer,
} from "../HtmlElements/elements.js";

const eventListeners = () => {
  form.addEventListener("submit", handleForm);
  productNameElm.addEventListener("keyup", handleProductName);
  productPriceElm.addEventListener("keyup", handleProductPrice);
  shoppingListContainer.addEventListener("click", handleEditAndDelete);
  modalOkBtn.addEventListener("click", handleOkModal);
  modalCancelBtn.addEventListener("click", handleCancelModal);
  searchElm.addEventListener("keyup", handleSearchProduct);
};

export default eventListeners;
