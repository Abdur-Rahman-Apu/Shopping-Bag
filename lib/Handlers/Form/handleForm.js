import {
  productNameElm,
  productPriceElm,
} from "../../HtmlElements/elements.js";

const handleForm = (evt) => {
  evt.preventDefault();
  const productName = productNameElm.value;
  const productPrice = productPriceElm.value;
  console.log(productName, productPrice);
};

export default handleForm;
