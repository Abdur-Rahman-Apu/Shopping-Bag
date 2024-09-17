import { setProductIntoLocalStorage } from "../../../utils/localStorage.js";
import { addShoppingItem, updateTotalProductNo } from "../../UI/shopItem.js";
import { showToastMsg } from "../../UI/toastMsg.js";

export default function handleAddProduct(newProduct) {
  setProductIntoLocalStorage(newProduct);

  const id = updateTotalProductNo();

  addShoppingItem({ id, ...newProduct });

  showToastMsg("Product Added Successfully", "success", 3000);
}
