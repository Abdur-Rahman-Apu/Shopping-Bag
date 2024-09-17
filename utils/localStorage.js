const setIntoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setProductIntoLocalStorage = (product) => {
  const products = getFromLocalStorage("products");

  const newProduct = {
    id: products.length + 1,
    ...product,
  };

  setIntoLocalStorage("products", [...products, newProduct]);
};

export { getFromLocalStorage, setIntoLocalStorage, setProductIntoLocalStorage };
