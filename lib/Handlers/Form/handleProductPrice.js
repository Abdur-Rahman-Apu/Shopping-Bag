import { isValidNumber } from "../../../utils/regularExpression.js";
import { removeHtmlElm } from "../../../utils/UpdateUI.js";

// Handle product price
const handleProductPrice = (evt) => {
  const target = evt.target;
  const value = evt.target.value;

  const sibling = target.nextElementSibling;

  // if error message exist then remove it
  sibling && removeHtmlElm(target.nextElementSibling);

  // validating price input
  if (!value || isNaN(parseFloat(value)) || !isValidNumber(value)) {
    target.value = value.slice(0, -1);
  }
};

export default handleProductPrice;
