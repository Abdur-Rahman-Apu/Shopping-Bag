import { setProductIntoLocalStorage } from "../../../utils/localStorage";
import { addShoppingItem, updateTotalProductNo } from "../../UI/shopItem";
import { showToastMsg } from "../../UI/toastMsg";

export default function handleAddProduct(newProduct) {
  setProductIntoLocalStorage(newProduct);

  const id = updateTotalProductNo();

  addShoppingItem({ id, ...newProduct });

  showToastMsg("Product Added Successfully", "success", 3000);
}
