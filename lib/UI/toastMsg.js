import {
  insertAdjacentHtml,
  removeHtmlElm,
  setStyleIntoTheUI,
} from "../../utils/UpdateUI.js";
import { toastMsgContainer, toastMsgLine } from "../HtmlElements/elements.js";

const showToastMsg = (msg, action, duration) => {
  setStyleIntoTheUI(toastMsgContainer, { display: "flex" });

  const toastHtml = `
          <div class="toast-msg-box">
              <p class="toast-msg-icon">${
                action === "success" ? "✅" : "❌"
              }</p>
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
  // setTimeout(() => {
  //     setStyleIntoTheUI(toastMsgContainer, { display: "none" });
  // }, duration);
  setTimeout(() => {
    // console.log("inside hide msg");
    // toastMsgContainer.style.display = "none";
    setStyleIntoTheUI(toastMsgContainer, { display: "none" });
    clearInterval(intervalId);
    removeHtmlElm(toastMsgLine);
  }, duration);
};

export { decreaseWidthOfTostMsgLine, showToastMsg };
