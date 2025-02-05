let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess(){
  attempts--;
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;

  while (attempts > 0) {
    if (guess == randomNumber) {
      // attempts = 0;
      feedbackElement.innerHTML = ("GOOD JOB");
      feedbackElement.style.color = ("green");
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = (`TOO LOW!!!! ${attempts} ATTEMPTS LEFT!! TRY   AGAIN!!`);
      feedbackElement.style.color = ("red");
      break;
    } else {
      feedbackElement.innerHTML = (`TOO HIGH!!! ${attempts} ATTEMPTS LEFT!! TRY AGAIN!!`);
      feedbackElement.style.color = "red";
      break;
    }
  }
  if (attempts == 0 && guess !== randomNumber) {
    feedbackElement.innerHTML = (`GAME OVER!! THE ANSWER WAS ${randomNumber}`);
    feedbackElement.style.color = ("red");
  }
}