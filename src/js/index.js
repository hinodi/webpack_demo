let isShow = false;

myButton.addEventListener("click", toggle);

function toggle() {
  isShow = !isShow;

  // update button text
  myButton.textContent = isShow ? "Hide the paragraph" : "Show the paragraph";
  myParagraph.style.display = isShow ? "block" : "none";
}
