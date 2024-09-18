import { setProductIntoLocalStorage } from "../../../utils/localStorage.js";
import { setStyleIntoTheUI } from "../../../utils/UpdateUI.js";
import { noShopItemContainer } from "../../HtmlElements/elements.js";
import {
  addShoppingItem,
  getProductId,
  updateTotalProductNo,
} from "../../UI/shopItem.js";
import { showToastMsg } from "../../UI/toastMsg.js";

export default function handleAddProduct(newProduct) {
  setStyleIntoTheUI(noShopItemContainer, { display: "none" });

  const id = getProductId();

  console.log(id, "id");
  console.log(newProduct, "new product");
  setProductIntoLocalStorage({ id, ...newProduct });

  updateTotalProductNo();

  addShoppingItem({ id, ...newProduct });

  showToastMsg("Product Added Successfully", "success", 3000);
}
