import selectElem from "../../utils/selectElem.js";

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

export {
  countElm,
  dateTimeElm,
  form,
  formSubmitBtn,
  productNameElm,
  productNameInputSection,
  productPriceElm,
  productPriceInputSection,
  searchElm,
  shoppingListContainer,
};
