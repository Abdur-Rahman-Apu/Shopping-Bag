import {
  formSubmitBtn,
  modalContainer,
  modalOkBtn,
} from "../lib/HtmlElements/elements.js";

const insertAdjacentHtml = (parent, newHtml, pos) => {
  parent.insertAdjacentHTML(pos, newHtml);
};

const setStyleIntoTheUI = (targetElm, newStyle) => {
  Object.assign(targetElm.style, newStyle);
};

const removeHtmlElm = (elm) => {
  elm.remove();
};

const setInputErrMsg = (parentElm, inputName) => {
  const newHtml = `<p class="err-msg">Please fill the product ${inputName} field</p>`;
  insertAdjacentHtml(parentElm, newHtml, "beforeend");
};

const setText = (elm, text) => {
  elm.textContent = text;
};

const updateFormSubmitButton = (value, isUpdate, id) => {
  formSubmitBtn.value = value;

  if (isUpdate) {
    formSubmitBtn.setAttribute("update", isUpdate);
    formSubmitBtn.setAttribute("productid", id);
  } else {
    formSubmitBtn.removeAttribute("update");
    formSubmitBtn.removeAttribute("productid");
    setStyleIntoTheUI(formSubmitBtn, {
      backgroundColor: "var(--primary-color)",
    });
  }
};

const showModal = (mode, productId) => {
  if (mode) {
    setStyleIntoTheUI(modalContainer, { display: "block" });
    modalOkBtn.setAttribute("productid", productId);
  } else {
    setStyleIntoTheUI(modalContainer, { display: "none" });
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
