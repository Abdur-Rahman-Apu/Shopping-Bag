import searchProduct from "../../UI/searchProduct.js";

// Handle Search input box
const handleSearchProduct = (evt) => {
  const searchProductName = evt.target.value;
  searchProduct(searchProductName);
};

export { handleSearchProduct };
