let input = document.getElementById("input");
let custom = document.getElementById("custom"); 
let customField = document.getElementById("custom-input-field");
let randomNumber = getRandomNumber(); 

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}


function showFieldCustom() {
  if (custom.checked) {
    document.getElementById("custom-input-field").style.display = "block";
  } else {
    document.getElementById("custom-input-field").style.display = "none";
  }
}

let runde = 0;
function guessRandom() {
  //Ungleichheit
  if (input.value != randomNumber) {
    if (input.value > randomNumber) {
      document.getElementById("guess-output").innerHTML +=
        `${runde + 1} - You need to guess lower than ${input.value}. Try again!` + "<br>";
    } else if (input.value < randomNumber) {
      document.getElementById("guess-output").innerHTML +=
        `${runde + 1} - You need to guess higher than ${input.value}. Try again!` + "<br>";
    }
  } else {
    document.getElementById("guess-output").innerHTML = "";
    document.getElementById("success-output").innerHTML = `GREAT! You got the right number in ${runde + 1}. MOVES!`;
  }

  
  runde++;

  if (four.checked && runde === 4) {
      btn.style.display = "none";
      document.getElementById("guess-output").innerHTML = "Wrong Play again!";
  } else if (five.checked && runde === 5) {
      btn.style.display = "none";
      document.getElementById("guess-output").innerHTML = "Wrong Play again!";
  } else if (six.checked && runde === 6) {
      btn.style.display = "none";
      document.getElementById("guess-output").innerHTML = "Wrong Play again!";
  } else if (custom.checked && runde == customField.value) {
    btn.style.display = "none";
    document.getElementById("guess-output").innerHTML = "Wrong Play again!";
  }


  if (input.value == "") {
    document.getElementById("guess-output").innerHTML = `Please enter a number. Try again!` + "<br>";
  }
}

