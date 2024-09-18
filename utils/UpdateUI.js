import {
  formSubmitBtn,
  modalContainer,
  modalOkBtn,
} from "../lib/HtmlElements/elements.js";

// To perform insertAdjacentHtml function
const insertAdjacentHtml = (parent, newHtml, pos) => {
  parent.insertAdjacentHTML(pos, newHtml);
};

// To apply new styles to the target element
const setStyleIntoTheUI = (targetElm, newStyle) => {
  Object.assign(targetElm.style, newStyle);
};

// To remove HTML element from the DOM
const removeHtmlElm = (elm) => {
  elm.remove();
};

// To show Input error message
const setInputErrMsg = (parentElm, inputName) => {
  const newHtml = `<p class="err-msg">Please fill the product ${inputName} field</p>`;
  insertAdjacentHtml(parentElm, newHtml, "beforeend");
};

// To set text into the element
const setText = (elm, text) => {
  elm.textContent = text;
};

/*

We are using the Submit button for adding a new product and update an existing product

updateFormSubmitButton: To make decision about adding a new product or updating a product

Parameters:
-----------
value: submit buttons text. Default value is 'Submit'. In update situation, the value will be 'Update'

isUpdate: true or false. True means we are trying to update an product

id: product id

*/
const updateFormSubmitButton = (value, isUpdate, id) => {
  // Set submit button text. Two possible values - Submit or Update
  formSubmitBtn.value = value;

  if (isUpdate) {
    // We are trying to update an product

    // Add update related attributes
    formSubmitBtn.setAttribute("update", isUpdate);
    formSubmitBtn.setAttribute("productid", id);
  } else {
    // We are not trying to update a product.
    // Remove all update related attributes and style
    formSubmitBtn.removeAttribute("update");
    formSubmitBtn.removeAttribute("productid");
    setStyleIntoTheUI(formSubmitBtn, {
      backgroundColor: "var(--primary-color)",
    });
  }
};

/*
shoModal: It will call when we will try to delete an product

Parameter:
mode: true or false. True: means open the model and false: means close the modal

productId: Product id
*/

const showModal = (mode, productId) => {
  if (mode) {
    setStyleIntoTheUI(modalContainer, { display: "block" });

    // Set product id into the modal ok button. So that we can handle delete product by using that id
    modalOkBtn.setAttribute("productid", productId);
  } else {
    setStyleIntoTheUI(modalContainer, { display: "none" });

    // Remove the product id from the modal ok button
    modalOkBtn.removeAttribute("productId");
  }
};

export {
  insertAdjacentHtml,
  removeHtmlElm,
  setInputErrMsg,
  setStyleIntoTheUI,
  setText,
  showModal,
  updateFormSubmitButton,
};
