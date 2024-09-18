/*
setIntoLocalStorage: Set something into local storage
Parameter: key and value
*/
const setIntoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/*
getFromLocalStorage: Get something from the local storage
Parameter: key 
*/
const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

/*
setProductIntoLocalStorage: Insert product into local storage
Parameter: product: product info and isUpdate: true or false
*/
const setProductIntoLocalStorage = (product, isUpdate) => {
  let products = getFromLocalStorage("products");

  if (isUpdate) {
    // If we want to update a product
    products = products.map((item) => {
      if (item.id == product.id) {
        return product;
      }
      return item;
    });
  } else {
    // we are adding a new product
    products = [...products, product];
  }

  setIntoLocalStorage("products", products);
};

export { getFromLocalStorage, setIntoLocalStorage, setProductIntoLocalStorage };
