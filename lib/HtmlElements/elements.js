import selectElem from "../../utils/selectElem.js";

const dateTimeElm = selectElem(".date-time");

const searchElm = selectElem("#search-product");

const countElm = selectElem(".product-count");

const shoppingListContainer = selectElem(".shopping-list-container");

const form = document.forms[0];

const formSubmitBtn = selectElem("input[type='submit']");

export {
  countElm,
  dateTimeElm,
  form,
  formSubmitBtn,
  searchElm,
  shoppingListContainer,
};
