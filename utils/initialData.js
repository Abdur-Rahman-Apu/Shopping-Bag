import { getFromLocalStorage, setIntoLocalStorage } from "./localStorage";

const initialData = () => {
  const products = getFromLocalStorage("products") || [];

  setIntoLocalStorage("products", products);
};

export default initialData;
