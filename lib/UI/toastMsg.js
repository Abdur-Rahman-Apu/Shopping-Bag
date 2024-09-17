import {
  insertAdjacentHtml,
  removeHtmlElm,
  setStyleIntoTheUI,
} from "../../utils/UpdateUI.js";
import { toastMsgContainer, toastMsgLine } from "../HtmlElements/elements.js";

const showToastMsg = (msg, action, duration) => {
  // toastMsgContainer.textContent = null;
  const isSuccess = action === "success";

  setStyleIntoTheUI(toastMsgContainer, {
    display: "flex",
    backgroundColor: isSuccess ? "#60e04c" : "rgb(239, 108, 108)",
    color: isSuccess ? "#000" : "#fff",
  });

  const toastHtml = `
          <div class="toast-msg-box">
              <p class="toast-msg-icon">${isSuccess ? "✅" : "❌"}</p>
              <p class="toast-msg">${msg}</p>
          </div>
          
  `;

  insertAdjacentHtml(toastMsgContainer, toastHtml, "afterbegin");

  const intervalId = decreaseWidthOfTostMsgLine(duration);

  hideToastMsg(intervalId, duration);
};

const decreaseWidthOfTostMsgLine = (duration) => {
  const decreaseWidth = 100 / ((duration / 1000) * 251);

  // console.log(decreaseWidth, "decrease width");

  let i = 0;

  let currentWidth = 100;

  const intervalId = setInterval(() => {
    i++;
    // console.log(i, "i");
    currentWidth -= decreaseWidth;
    // console.log(currentWidth);
    setStyleIntoTheUI(toastMsgLine, { width: `${currentWidth}%` });
  }, 1);

  return intervalId;
};

const hideToastMsg = (intervalId, duration) => {
  setTimeout(() => {
    setStyleIntoTheUI(toastMsgContainer, { display: "none" });
    clearInterval(intervalId);
    // removeHtmlElm(toastMsgLine);

    Array.from(toastMsgContainer.children).forEach((elm) => removeHtmlElm(elm));
  }, duration);
};

export { decreaseWidthOfTostMsgLine, showToastMsg };
