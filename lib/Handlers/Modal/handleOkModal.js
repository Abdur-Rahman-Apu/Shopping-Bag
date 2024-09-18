import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../../../utils/localStorage.js";
import { showModal } from "../../../utils/UpdateUI.js";
import { modalOkBtn } from "../../HtmlElements/elements.js";
import { showShoppingItems, updateTotalProductNo } from "../../UI/shopItem.js";
import { showToastMsg } from "../../UI/toastMsg.js";

// To handle modal ok button click event
export default function handleOkModal() {
  // Get the product id which need to be deleted
  const productId = modalOkBtn.getAttribute("productid");

  let products = getFromLocalStorage("products");

  // remove the product from products array
  products = products.filter((item) => item.id != productId);

  // set into the storage
  setIntoLocalStorage("products", products);

  // update the total product count
  updateTotalProductNo();

  // Update the Shopping list, here true means: we are trying to update the DOM
  showShoppingItems(products, true);

  // close the modal
  showModal(false);

  // Show a toast of delete action
  showToastMsg("Product Deleted Successfully", "error", 3000);
}
