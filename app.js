const nav = document.getElementById("nav-container");

window.onscroll = function () {
  if (
    document.body.scrollTop >= 75 ||
    document.documentElement.scrollTop >= 75
  ) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
    document.getElementById("logo").style.color = "#ffffff";
    document.getElementById("nav-link1").style.color = "#ffffff";
    document.getElementById("nav-link2").style.color = "#ffffff";
    document.getElementById("nav-link3").style.color = "#ffffff";
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
    document.getElementById("logo").style.color = "#000000";
    document.getElementById("nav-link1").style.color = "#000000";
    document.getElementById("nav-link2").style.color = "#000000";
    document.getElementById("nav-link3").style.color = "#000000";
  }
};

const button = document.querySelector(".button");
let setText = document.querySelector(".titles");

button.addEventListener("click", function () {
  if (document.querySelector(".titles").children.length == 4) {
    return;
  }
  const child = document.createElement("p");
  child.classList.add("child");
  child.textContent = "More Information Coming Soon";
  setText.appendChild(child);
});
