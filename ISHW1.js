// Javascript
var pics = [
  "kitty pics/kitty_bed.jpg",
  "kitty pics/kitty_basket.jpg",
  "kitty pics/kitty_laptop.jpg",
  "kitty pics/kitty_door.jpg",
  "kitty pics/kitty_sink.jpg",
  "kitty pics/kitty_wall.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function() {
  if (counter === 6) {
    counter = 0;
  }
  img.src = pics[counter];
  counter = counter + 1;
});
