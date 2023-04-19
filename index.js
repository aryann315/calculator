let screen = document.getElementById('screen');
let btn = document.querySelectorAll('button');
let screenValue = "";
let clickNumbers = new Audio("sounds/click.wav");
let finalAnswer = new Audio("sounds/finalanswer.wav");
let del = new Audio("sounds/delete.wav");

var i = 0;
while (i < btn.length) {
  btn[i].addEventListener('click', function(e) {
    buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText === "RESET") {
      del.play();
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText === "=") {
      finalAnswer.play();
      screen.value = eval(screenValue);
    } else if (buttonText === "DEL") {
      del.play();
      let sliced = screenValue.slice(0, -1);
      screenValue = sliced;
      screen.value = screenValue;
    } else {
      clickNumbers.play();
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
  i++;
}
