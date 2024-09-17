const setIntoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setProductIntoLocalStorage = (product, isUpdate) => {
  let products = getFromLocalStorage("products");

  if (isUpdate) {
    products = products.map((item) => {
      if (item.id == product.id) {
        return product;
      }
      return item;
    });
  } else {
    const newProduct = {
      id: products.length + 1,
      ...product,
    };
    products = [...products, newProduct];
  }

  setIntoLocalStorage("products", products);
};

export { getFromLocalStorage, setIntoLocalStorage, setProductIntoLocalStorage };
