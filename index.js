import handleDateTime from "./lib/DateTime/HandleDateTime.js";
import eventListeners from "./lib/Listeners/eventListeners.js";
import initialData from "./utils/initialData.js";

(() => {
  handleDateTime();
  initialData();
  eventListeners();
})();
