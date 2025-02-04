let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(){
  let inputElement = document.getElementById("guess").value;
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;

  if (guess == randomNumber) {

  } else if (guess < randomNumber) {

  } else {

  }
}