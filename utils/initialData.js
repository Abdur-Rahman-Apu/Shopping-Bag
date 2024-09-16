import { getFromLocalStorage, setIntoLocalStorage } from "./localStorage.js";

const initialData = () => {
  const products = getFromLocalStorage("products") || [];

  setIntoLocalStorage("products", products);
};

export default initialData;
