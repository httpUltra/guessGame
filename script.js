let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(){
  let inputElement = document.getElementById("guess").value;
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;

  if (guess == randomNumber) {
    feedbackElement.innerHTML("GOOD JOB");
    feedbackElement.style.color("green");
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML("TOO LOW!!!! TRY AGAIN!!");
    feedbackElement.style.color("red");
  } else {

  }
}