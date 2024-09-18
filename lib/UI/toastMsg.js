import selectElem from "../../utils/selectElem.js";
import {
  insertAdjacentHtml,
  removeHtmlElm,
  setStyleIntoTheUI,
} from "../../utils/UpdateUI.js";
import { toastMsgContainer } from "../HtmlElements/elements.js";

const toastLifeLineInitialStyle = (toastId) => {
  const style = {
    width: "100%",
    height: "3px",
    backgroundColor: "#fff",
    marginTop: "10px",
  };

  Object.assign(selectElem(`.toast-life-line-${toastId}`).style, style);
};

const showToastMsg = (msg, action, duration) => {
  const isSuccess = action === "success";

  // hideExistentToastBox();

  const toastId = toastMsgContainer.children.length;

  console.log(toastId, "toast id");

  setStyleIntoTheUI(toastMsgContainer, {
    display: "flex",

    color: isSuccess ? "#000" : "#fff",
  });

  const toastHtml = `
          <div class="toast-msg-wrapper toast-id-${toastId}">
            <div class="toast-msg-box" >
                <p class="toast-msg-icon">${isSuccess ? "✅" : "❌"}</p>
                <p class="toast-msg">${msg}</p>
            </div>
            <div class="toast-life-line-${toastId}"></div>
          </div>
  `;

  insertAdjacentHtml(toastMsgContainer, toastHtml, "afterbegin");

  toastLifeLineInitialStyle(toastId);

  setStyleIntoTheUI(selectElem(`.toast-id-${toastId}`), {
    backgroundColor: isSuccess ? "#60e04c" : "rgb(239, 108, 108)",
  });

  console.log(document.querySelector(".toast-life-line"), "toastMsgline");

  const intervalId = decreaseWidthOfTostMsgLine(toastId, duration);

  hideToastMsg(toastId, intervalId, duration);
};

const decreaseWidthOfTostMsgLine = (toastId, duration) => {
  const decreaseWidth = 100 / ((duration / 1000) * 251);

  // let i = 0;

  let currentWidth = 100;

  const msgLineElm = selectElem(`.toast-life-line-${toastId}`);

  const intervalId = setInterval(() => {
    // i++;
    // console.log(currentWidth, "current width");
    currentWidth -= decreaseWidth;

    if (msgLineElm) {
      setStyleIntoTheUI(msgLineElm, {
        width: `${currentWidth}%`,
      });
    }
  }, 1);

  return intervalId;
};

const hideToastMsg = (toastId, intervalId, duration) => {
  setTimeout(() => {
    // setStyleIntoTheUI(toastMsgContainer, { display: "none" });
    clearInterval(intervalId);

    hideToastBox(toastId);
  }, duration);
};

const hideToastBox = (toastId) => {
  Array.from(toastMsgContainer.children).forEach((elm) => {
    console.log(elm, "elm");
    console.log(toastId);
    console.log(elm.classList.contains(`${toastId}`));
    elm.classList.contains(`toast-id-${toastId}`) && removeHtmlElm(elm);
  });
};

export { decreaseWidthOfTostMsgLine, showToastMsg };
