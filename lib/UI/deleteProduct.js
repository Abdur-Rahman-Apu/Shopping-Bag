import { showModal } from "../../utils/UpdateUI.js";

const deleteProduct = (id) => {
  showModal(true, id);
};

export { deleteProduct };
