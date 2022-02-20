var numberOfButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var button = this.textContent;

    makeSound(button);

    buttonAnimation(button);
});
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
})


function makeSound(key) {
  switch (key) {

    case"w":
       var monkey = new Audio('sounds/monkey.mp3');
       monkey.currentTime = 0;
       monkey.play();
       break;

    case"a":
       var lion = new Audio('sounds/lion.mp3');
       lion.play();
       break;

    case"s":
        var rhino = new Audio('sounds/rhino.mp3');
        rhino.play();
        break;

    case"d":
       var giraffe = new Audio('sounds/giraffe.mp3');
       giraffe.play();
       break;

    default: console.log(button);

}
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
