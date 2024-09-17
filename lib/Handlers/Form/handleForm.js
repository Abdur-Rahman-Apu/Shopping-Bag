import { setInputErrMsg } from "../../../utils/UpdateUI.js";
import {
  productNameElm,
  productNameInputSection,
  productPriceElm,
  productPriceInputSection,
} from "../../HtmlElements/elements.js";

const handleForm = (evt) => {
  evt.preventDefault();
  const productName = productNameElm.value;
  const productPrice = productPriceElm.value;
  console.log(productName, productPrice);

  if (!productName) {
    setInputErrMsg(productNameInputSection, "name");
  } else if (!productPrice) {
    setInputErrMsg(productPriceInputSection, "price");
  } else {
  }
};

export default handleForm;
