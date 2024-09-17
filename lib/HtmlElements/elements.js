import selectElem from "../../utils/selectElem.js";

const body = document.body;

const dateTimeElm = selectElem(".date-time");

const searchElm = selectElem("#search-product");

const countElm = selectElem(".product-count");

const shoppingListContainer = selectElem(".shopping-list-container");

const form = document.forms[0];

const productNameElm = form.productName;
const productPriceElm = form.productPrice;

const formSubmitBtn = selectElem("input[type='submit']");

const productNameInputSection = selectElem(".product-name-input-section");

const productPriceInputSection = selectElem(".product-price-input-section");

const toastMsgContainer = selectElem(".toast-msg-container");

const toastMsgLine = selectElem(".toast-life-line");
const toastMsgBox = selectElem(".toast-msg-box");

const modalContainer = selectElem(".modal");
const modalOkBtn = selectElem(".modal-action .yes-btn");
const modalCancelBtn = selectElem(".modal-action .no-btn");

export {
  body,
  countElm,
  dateTimeElm,
  form,
  formSubmitBtn,
  modalCancelBtn,
  modalContainer,
  modalOkBtn,
  productNameElm,
  productNameInputSection,
  productPriceElm,
  productPriceInputSection,
  searchElm,
  shoppingListContainer,
  toastMsgBox,
  toastMsgContainer,
  toastMsgLine,
};
