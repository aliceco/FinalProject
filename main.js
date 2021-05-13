//animated underline yay
let items = document.querySelectorAll("nav a");

items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("a.active").classList.remove("active");
    item.classList.add("active");
  });
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
