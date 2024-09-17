import { setProductIntoLocalStorage } from "../../../utils/localStorage.js";
import { capitalize } from "../../../utils/stringFun.js";
import { setInputErrMsg } from "../../../utils/UpdateUI.js";
import {
  form,
  productNameElm,
  productNameInputSection,
  productPriceElm,
  productPriceInputSection,
} from "../../HtmlElements/elements.js";
import { showToastMsg } from "../../UI/toastMsg.js";

const handleForm = (evt) => {
  evt.preventDefault();

  const productName = productNameElm.value;
  const productPrice = productPriceElm.value;

  if (!productName) {
    setInputErrMsg(productNameInputSection, "name");
  } else if (!productPrice) {
    setInputErrMsg(productPriceInputSection, "price");
  } else {
    setProductIntoLocalStorage({
      name: capitalize(productName),
      price: productPrice,
    });

    showToastMsg("Product Added Successfully", "success", 1000);

    form.reset();
  }
};

export default handleForm;
