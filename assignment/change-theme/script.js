const changeColorBtn = document.querySelector("#btn");
const textColour = document.querySelector("h1");

changeColorBtn.addEventListener("click", changeBackground);

function changeBackground() {
  if (document.body.style.backgroundColor === "black") {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("h1").style.color = "black";
  } else {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
  }
}
