import { hasDigit, hasSpecialChar } from "../../../utils/regularExpression.js";
import { isStartWithSpace } from "../../../utils/stringFun.js";
import { removeHtmlElm } from "../../../utils/UpdateUI.js";

const handleProductName = (evt) => {
  const targetElm = evt.target;

  const sibling = targetElm.nextElementSibling;
  sibling && removeHtmlElm(targetElm.nextElementSibling);

  const value = evt.target.value;

  if (
    !value ||
    hasDigit(value) ||
    hasSpecialChar(value) ||
    isStartWithSpace(value)
  ) {
    targetElm.value = value.slice(0, -1);
  }
};

export default handleProductName;
