import { showModal } from "../../utils/UpdateUI.js";

const deleteProduct = (id) => {
  // Show modal: true: open the modal, id: product id which need to be deleted
  showModal(true, id);
};

export { deleteProduct };
