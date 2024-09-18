import searchProduct from "../../UI/searchProduct.js";

const handleSearchProduct = (evt) => {
  console.log(evt.target.value, "search value");
  const searchProductName = evt.target.value;
  searchProduct(searchProductName);
};

export { handleSearchProduct };
