import { setProductIntoLocalStorage } from "../../../utils/localStorage.js";
import { setStyleIntoTheUI } from "../../../utils/UpdateUI.js";
import { noShopItemContainer } from "../../HtmlElements/elements.js";
import {
  addShoppingItem,
  getProductId,
  updateTotalProductNo,
} from "../../UI/shopItem.js";
import { showToastMsg } from "../../UI/toastMsg.js";

// To handle adding a new product
export default function handleAddProduct(newProduct) {
  // Disable the no item message container
  setStyleIntoTheUI(noShopItemContainer, { display: "none" });

  // get the product id
  const id = getProductId();

  // set the new product into the storage
  setProductIntoLocalStorage({ id, ...newProduct });

  // update the total product count
  updateTotalProductNo();

  // add new product
  addShoppingItem({ id, ...newProduct });

  // show toast message for success action
  showToastMsg("Product Added Successfully", "success", 3000);
}
