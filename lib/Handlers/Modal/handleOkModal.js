import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../../../utils/localStorage.js";
import { showModal } from "../../../utils/UpdateUI.js";
import { modalOkBtn } from "../../HtmlElements/elements.js";
import { showShoppingItems } from "../../UI/shopItem.js";
import { showToastMsg } from "../../UI/toastMsg.js";

export default function handleOkModal() {
  const productId = modalOkBtn.getAttribute("productid");
  let products = getFromLocalStorage("products");
  products = products.filter((item) => item.id != productId);
  setIntoLocalStorage("products", products);

  showShoppingItems(products, true);

  showModal(false);
  showToastMsg("Product Deleted Successfully", "error", 3000);
}
