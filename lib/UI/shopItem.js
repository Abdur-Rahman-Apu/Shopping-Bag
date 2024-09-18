import { getFromLocalStorage } from "../../utils/localStorage.js";
import {
  insertAdjacentHtml,
  setStyleIntoTheUI,
  setText,
} from "../../utils/UpdateUI.js";
import {
  countElm,
  noShopItemContainer,
  shoppingListContainer,
} from "../HtmlElements/elements.js";

// headerOfShoppingList: To set the Header of shopping list
const headerOfShoppingList = () => {
  const shopItemHtml = `<div class="item">
                        <p class="product-serial">ID</p>
                        <p class="product-name">Product Name</p>
                        <p class="product-price">Product Price</p>
                        <div class="action">Action</div>
                </div>`;

  insertAdjacentHtml(shoppingListContainer, shopItemHtml, "afterbegin");
};

// To add a new product into the Shopping list
const addShoppingItem = (product) => {
  const shopItemHtml = `<div class="item">
                        <p class="product-serial">${product?.id} .</p>
                        <p class="product-name">${product?.name}</p>
                        <p class="product-price">${product?.price}</p>
                        <div class="action">
                            <button class="edit-btn" title="Edit" data-edit="${product?.id}"><i class="fas fa-edit"
                                    data-edit="${product?.id}"></i></button>
                            <button class="delete-btn" title="delete" data-delete="${product?.id}"><i
                                    class="fas fa-trash-alt" data-delete="${product?.id}"></i></button>
                        </div>
                </div>`;
  insertAdjacentHtml(shoppingListContainer, shopItemHtml, "beforeend");
};

/*
showShoppingItems: To display into the ui
Parameters:
----------
products: Products array
update: true or false. True means we want to update the UI
*/
const showShoppingItems = (products, update) => {
  // If we need to show new products remove old DOM items
  update && removeOldShoppingList();

  // Set the shopping list header part
  headerOfShoppingList();

  if (products.length) {
    // We have products
    setStyleIntoTheUI(noShopItemContainer, { display: "none" });
    products.forEach((product) => addShoppingItem(product));
  } else {
    // we have no products
    setStyleIntoTheUI(noShopItemContainer, { display: "flex" });
  }
};

// To update the total products count
const updateTotalProductNo = () => {
  const products = getFromLocalStorage("products") || [];
  setText(countElm, products.length);
};

// To  Get new product id
const getProductId = () => {
  const products = getFromLocalStorage("products") || [];

  if (products.length) {
    // If we have products, then get the last item id, increase it and return the new id
    return products[products.length - 1].id + 1;
  }

  // We have no product. Products = []
  return products.length + 1;
};

// To remove existing shopping list items from the DOM

const removeOldShoppingList = () => {
  // Get all children of the shopping list container and remove all without the 'no-shop-item' container
  const childrens = shoppingListContainer.children;

  Array.from(childrens).forEach(
    (child) => !child.classList.contains("no-shop-item") && child.remove()
  );
};

export {
  addShoppingItem,
  getProductId,
  showShoppingItems,
  updateTotalProductNo,
};
