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

function blogNavigation() {

  let allButton = document.querySelector("#allButton");
  let allPosts = document.querySelector("#blog-posts-container");
  let show2019Button = document.querySelector("#twentynineteen-button");
  let post2019 = document.querySelector("#twentynineteen");
  let show2020Button = document.querySelector("#twentytwenty-button");
  let post2020 = document.querySelector("#twentytwenty")
  let show2021Button = document.querySelector("#twentytwentyone-button")
  let post2021 = document.querySelector("#twentytwentyone");
  
  show2021Button.addEventListener("click", () => {
    post2021.style.display = "inline";
    post2019.style.display= "none";
    post2020.style.display ="none";
  });
  
  
  show2020Button.addEventListener("click", () => {
    post2019.style.display= "none";
    post2020.style.display = "inline";
    post2021.style.display = "none";
  });
  
  show2019Button.addEventListener("click", () => {
    post2020.style.display ="none";
    post2019.style.display = "inline";
    post2021.style.display = "none";
  });
  
  
  allButton.addEventListener("click", () => {
    post2020.style.display = "inline";
    post2019.style.display = "inline";
    post2021.style.display = "none";
  });

}

blogNavigation();



// let allButton = document.querySelector("#allButton")
// let all = document.querySelectorAll(".all");
// allButton.addEventListener("click", ()=> {
//   console.log("wow its clicked")
//   all.hidden = true;

// }, false);
