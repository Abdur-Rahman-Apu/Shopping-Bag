import { isValidNumber } from "../../../utils/regularExpression.js";
import { removeHtmlElm } from "../../../utils/UpdateUI.js";

const handleProductPrice = (evt) => {
  const target = evt.target;
  const value = evt.target.value;

  const sibling = target.nextElementSibling;
  sibling && removeHtmlElm(target.nextElementSibling);

  console.log(value, "value");
  console.log(isValidNumber(value), "is valid number");

  if (!value || isNaN(parseFloat(value)) || !isValidNumber(value)) {
    target.value = value.slice(0, -1);
  }
};

export default handleProductPrice;
