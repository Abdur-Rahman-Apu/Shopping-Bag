import { hasDigit, hasSpecialChar } from "../../../utils/regularExpression.js";
import { isStartWithSpace } from "../../../utils/stringFun.js";

const handleProductName = (evt) => {
  const targetElm = evt.target;
  const value = evt.target.value;
  console.log(value);

  if (
    !value ||
    hasDigit(value) ||
    hasSpecialChar(value) ||
    isStartWithSpace(value)
  ) {
    console.log("here");
    targetElm.value = value.slice(0, -1);
  }
};

export default handleProductName;
