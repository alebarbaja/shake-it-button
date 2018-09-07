// Variables
var button = document.querySelector(".button");
var arrow = document.querySelector(".arrow");

// Functions
var animateBtn = function() {
  button.classList.add("animationBtn");
  setTimeout(function() {
    button.classList.remove("animationBtn");
  }, 250);
};

var desanimateArrow = function() {
  arrow.classList.remove("animationArrow");
};

var animateArrow = function() {
  arrow.classList.add("animationArrow");
};

// Events
button.addEventListener("click", animateBtn);
button.addEventListener("mouseover", desanimateArrow);
button.addEventListener("mouseleave", animateArrow);
