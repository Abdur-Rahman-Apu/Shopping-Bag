const insertAdjacentHtml = (parent, newHtml, pos) => {
  parent.insertAdjacentHtml(pos, newHtml);
};

const setIntoTheUI = (targetElm, newStyle) => {
  Object.assign(targetElm.style, newStyle);
};

const removeHtmlElm = (elm) => {
  elm.remove();
};

export { insertAdjacentHtml, removeHtmlElm, setIntoTheUI };
