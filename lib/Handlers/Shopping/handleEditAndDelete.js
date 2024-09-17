import { editProduct } from "../../UI/editProduct.js";

const handleEditAndDelete = (evt) => {
  const targetElm = evt.target;
  console.log(targetElm, "edit or delete");

  const editId = targetElm.dataset.edit;

  const deleteId = targetElm.dataset.delete;

  console.log(editId, "edit id");

  console.log(deleteId, "delete id");

  if (editId) {
    editProduct(editId);
  }

  if (deleteId) {
  }
};

export { handleEditAndDelete };
