const insertAdjacentHtml = (parent, newHtml, pos) => {
  console.log(parent);
  parent.insertAdjacentHTML(pos, newHtml);
};

const setStyleIntoTheUI = (targetElm, newStyle) => {
  console.log("Set style");
  Object.assign(targetElm.style, newStyle);
};

const removeHtmlElm = (elm) => {
  console.log("remove elm");
  elm.remove();
};

const setInputErrMsg = (parentElm, inputName) => {
  const newHtml = `<p class="err-msg">Please fill the product ${inputName} field</p>`;
  insertAdjacentHtml(parentElm, newHtml, "beforeend");
};

const setText = (elm, text) => {
  elm.textContent = text;
};

export {
  insertAdjacentHtml,
  removeHtmlElm,
  setInputErrMsg,
  setStyleIntoTheUI,
  setText,
};
