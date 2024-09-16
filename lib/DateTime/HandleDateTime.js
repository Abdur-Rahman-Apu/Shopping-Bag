import getToday from "../../utils/getToday.js";
import { dateTimeElm } from "../HtmlElements/elements.js";

const handleDateTime = () => {
  const dateFormat = getToday();
  dateTimeElm.textContent = dateFormat;
};

export default handleDateTime;
