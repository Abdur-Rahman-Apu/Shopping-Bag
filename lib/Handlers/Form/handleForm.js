import { capitalize } from "../../../utils/stringFun.js";
import { setInputErrMsg } from "../../../utils/UpdateUI.js";
import {
  form,
  formSubmitBtn,
  productNameElm,
  productNameInputSection,
  productPriceElm,
  productPriceInputSection,
} from "../../HtmlElements/elements.js";
import handleAddProduct from "./handleAddProduct.js";
import handleUpdateProduct from "./handleUpdateProduct.js";

const handleForm = (evt) => {
  evt.preventDefault();

  const isUpdate = formSubmitBtn.getAttribute("update");

  const productName = productNameElm.value;
  const productPrice = productPriceElm.value;

  if (!productName) {
    setInputErrMsg(productNameInputSection, "name");
  } else if (!productPrice) {
    setInputErrMsg(productPriceInputSection, "price");
  } else {
    const newProduct = {
      name: capitalize(productName),
      price: productPrice,
    };

    if (isUpdate) {
      handleUpdateProduct(newProduct);
    } else {
      handleAddProduct(newProduct);
    }
    form.reset();
  }
};

export default handleForm;
