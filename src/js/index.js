import { myButton, myParagraph } from "./loader";
import "../css/main.css";
import "../css/button.css";

let isShow = false;

myButton.addEventListener("click", toggle);

function toggle() {
  isShow = !isShow;

  // update button text
  myButton.textContent = isShow ? "Hide the paragraph" : "Show the paragraph";
  myParagraph.style.display = isShow ? "block" : "none";

  console.log(__DEV__);
}
