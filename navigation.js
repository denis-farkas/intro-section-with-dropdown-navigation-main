const dropdown = document.getElementsByClassName("dropdown-btn");
const down = document.getElementsByClassName("down");
let i;

function myFunction() {
  const x = document.getElementById("myTop");
  const back = document.getElementById("back");
  if (x.className === "topnav") {
    back.classList.remove("notVisible");
    back.className += " visible";
    x.className += " responsive";
  } else {
    back.classList.remove("visible");
    back.className += " notVisible";
    x.className = "topnav";
  }
}

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    let dropdownContent = this.nextElementSibling;
    const down = this.querySelector("img");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      down.classList.remove("rotate");
    } else {
      dropdownContent.style.display = "block";
      down.className += " rotate";
    }
  });
}
