import { deleteProduct } from "../../UI/deleteProduct.js";
import { editProduct } from "../../UI/editProduct.js";

const handleEditAndDelete = (evt) => {
  const targetElm = evt.target;

  const editId = targetElm.dataset.edit;

  const deleteId = targetElm.dataset.delete;

  if (editId) {
    // We are trying to edit a product
    editProduct(editId);
  }

  if (deleteId) {
    // We are trying to delete a product
    deleteProduct(deleteId);
  }
};

export { handleEditAndDelete };
