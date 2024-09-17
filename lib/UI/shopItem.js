import { getFromLocalStorage } from "../../utils/localStorage.js";
import { insertAdjacentHtml, setText } from "../../utils/UpdateUI.js";
import { countElm, shoppingListContainer } from "../HtmlElements/elements.js";

const headerOfShoppingList = () => {
  const shopItemHtml = `<div class="item">
                        <p class="product-serial">Sl.</p>
                        <p class="product-name">Product Name</p>
                        <p class="product-price">Product Price</p>
                        <div class="action">Action</div>
                </div>`;

  insertAdjacentHtml(shoppingListContainer, shopItemHtml, "afterbegin");
};

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

const showShoppingItems = (products, update) => {
  update && removeOldShoppingList();
  headerOfShoppingList();

  products.forEach((product) => addShoppingItem(product));
};

const updateTotalProductNo = () => {
  const products = getFromLocalStorage("products") || [];
  setText(countElm, products.length);
  return products.length;
};

const removeOldShoppingList = () => {
  const childrens = shoppingListContainer.children;
  Array.from(childrens).forEach((child) => child.remove());
};

export { addShoppingItem, showShoppingItems, updateTotalProductNo };
