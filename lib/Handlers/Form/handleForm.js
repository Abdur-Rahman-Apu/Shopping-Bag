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

// handle Form Submit event
const handleForm = (evt) => {
  // prevent the browser default behavior
  evt.preventDefault();

  // we are setting attribute for edit product, So trying to get update attribute
  const isUpdate = formSubmitBtn.getAttribute("update");

  const productName = productNameElm.value;
  const productPrice = productPriceElm.value;

  if (!productName) {
    // show error message for the invalid input
    setInputErrMsg(productNameInputSection, "name");
  } else if (!productPrice) {
    // show error message for the invalid input
    setInputErrMsg(productPriceInputSection, "price");
  } else {
    // inputs are valid
    const newProduct = {
      name: capitalize(productName),
      price: productPrice,
    };

    if (isUpdate) {
      // Update a product
      handleUpdateProduct(newProduct);
    } else {
      // Add a product
      handleAddProduct(newProduct);
    }

    // reset the form
    form.reset();
  }
};

export default handleForm;
