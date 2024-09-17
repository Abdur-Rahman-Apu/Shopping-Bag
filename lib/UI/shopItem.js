import { insertAdjacentHtml } from "../../utils/UpdateUI.js";
import { shoppingListContainer } from "../HtmlElements/elements.js";

const headerOfShoppingList = () => {
  const shopItemHtml = `<div class="item">
                        <p class="product-serial">Sl.</p>
                        <p class="product-name">Product Name</p>
                        <p class="product-price">Product Price</p>
                        <div class="action">Action</div>
                </div>`;

  insertAdjacentHtml(shoppingListContainer, shopItemHtml, "afterbegin");
};

const addShoppingItem = (product, index) => {
  const shopItemHtml = `<div class="item">
                        <p class="product-serial">${index + 1} .</p>
                        <p class="product-name">${product?.name}</p>
                        <p class="product-price">${product?.price}</p>
                        <div class="action">
                            <button class="edit-btn" title="Edit"><i class="fas fa-edit"
                                    data-edit-no="${product?.id}"></i></button>
                            <button class="delete-btn" title="delete" data-delete-no="${
                              product?.id
                            }"><i
                                    class="fas fa-trash-alt"></i></button>
                        </div>
                </div>`;

  return shopItemHtml;
};

const showShoppingItems = (products) => {
  headerOfShoppingList();

  products.forEach((product, index) => {
    const productHtml = addShoppingItem(product, index);
    insertAdjacentHtml(shoppingListContainer, productHtml, "beforeend");
  });
};

export { addShoppingItem, showShoppingItems };
