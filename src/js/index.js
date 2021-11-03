import { myButton, myParagraph } from "./loader";
import Counter from "./Counter";
import "../css/main.css";
import "../css/button.css";

let isShow = false;
const counter = new Counter();

myButton.addEventListener("click", toggle);

function toggle() {
  isShow = !isShow;

  // update button text
  myButton.textContent = isShow ? "Hide the paragraph" : "Show the paragraph";
  myParagraph.style.display = isShow ? "block" : "none";

  console.log(counter.increase());
  const a = { b: { c: 100 } };
  console.log(a?.b?.c);
}
