let ProgressSpan = document.querySelectorAll(".progress span");
let who = document.querySelector(".who-am");
let Body = document.getElementById("dark");
let ImgDark = document.getElementById("img-dark");
let buttom = document.querySelector(".darkk");

buttom.addEventListener("click", () => {
  Body.classList.toggle("dark");
  buttom.textContent = "night";
  buttom.src = "night.png";
});

window.onscroll = function () {
  if (window.scrollY >= who.offsetTop - 50) {
    ProgressSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

function loading() {
  document.querySelector(".loading").classList.add("stop");
}

function addloading() {
  setInterval(loading, 2500);
}

window.onload = addloading();
