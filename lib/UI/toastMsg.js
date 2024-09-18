import selectElem from "../../utils/selectElem.js";
import {
  insertAdjacentHtml,
  removeHtmlElm,
  setStyleIntoTheUI,
} from "../../utils/UpdateUI.js";
import { toastMsgContainer } from "../HtmlElements/elements.js";

/*
toastLifeLineInitialStyle: add style to the toast line which will indicate the life span of the toast message

Parameter: toastId: To style specific toast line
*/
const toastLifeLineInitialStyle = (toastId) => {
  const style = {
    width: "100%",
    height: "3px",
    backgroundColor: "#fff",
    marginTop: "10px",
  };

  Object.assign(selectElem(`.toast-life-line-${toastId}`).style, style);
};

/*
decreaseWidthOfTostMsgLine: To decrease the width of the toast Life span indicators
Parameters: 
-----------
toastId: To select specific toast msg
duration: The duration of the toast message life
*/
const decreaseWidthOfTostMsgLine = (toastId, duration) => {
  /*
  How much width will be decreased in 1 ms?

  Calculation:
  -----------
  Total width: 100%
  Duration: millisecond. Need to convert into second. 1ms = 1000 second

  setInterval function is running 251 times for 1ms

  For 1s, 100/251
  For 2s, 100 / (251 *2)
  */
  const decreaseWidth = 100 / ((duration / 1000) * 251);

  let currentWidth = 100;

  // select the specific toast message life indicator
  const msgLineElm = selectElem(`.toast-life-line-${toastId}`);

  // decrease the Life span indicator width after 1ms
  const intervalId = setInterval(() => {
    currentWidth -= decreaseWidth;

    // decrease the width if the message life span indicator is exist
    if (msgLineElm) {
      setStyleIntoTheUI(msgLineElm, {
        width: `${currentWidth}%`,
      });
    }
  }, 1);

  return intervalId;
};

/*
hideToastMsg: To hide the toast message
Parameters:
-----------
toastId: Specific toast id to hide
intervalId: To clear the decrease width setInterval function
duration: The Toast message life span
*/
const hideToastMsg = (toastId, intervalId, duration) => {
  // Hide the toast after the specific duration
  setTimeout(() => {
    clearInterval(intervalId);
    hideToastBox(toastId);
  }, duration);
};

/*
hideToastBox: To remove the toast box from the DOM

Parameters: toastId: To remove the specific toast id
*/
const hideToastBox = (toastId) => {
  Array.from(toastMsgContainer.children).forEach((elm) => {
    elm.classList.contains(`toast-id-${toastId}`) && removeHtmlElm(elm);
  });
};

/*
showToastMsg: To show a toast message

Parameters:
-----------
msg: Toast message
action: success or delete
duration: The Life span of the toast
*/
const showToastMsg = (msg, action, duration) => {
  // Do you want to show toast for success action?
  const isSuccess = action === "success";

  // Get new toast id
  const toastId = toastMsgContainer.children.length;

  // Display the toast message container and set some style
  setStyleIntoTheUI(toastMsgContainer, {
    display: "flex",
    color: isSuccess ? "#000" : "#fff",
  });

  // Toast message body part
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

  // Set toast life span indicators initial style
  toastLifeLineInitialStyle(toastId);

  // Set the background color of the toast for success and delete
  setStyleIntoTheUI(selectElem(`.toast-id-${toastId}`), {
    backgroundColor: isSuccess ? "#60e04c" : "rgb(239, 108, 108)",
  });

  // Decrease the width of the toast Life line width based on the given duration
  const intervalId = decreaseWidthOfTostMsgLine(toastId, duration);

  // Hide the toast message
  hideToastMsg(toastId, intervalId, duration);
};

export { decreaseWidthOfTostMsgLine, showToastMsg };
