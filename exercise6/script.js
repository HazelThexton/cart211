// sayHello()
//
//
function throwDice() {

  let r1 = Math.floor(Math.random()*6+1);

  let r2 = Math.floor(Math.random()*6+1);

  let diceImageSrc = "media/dice" + r1 + ".jpg"

  document.getElementById("diceNumber").innerHTML= r1;

  document.getElementById("diceImage").src= diceImageSrc;

  let diceImage2Src = "media/dice" + r2 + ".jpg"

  document.getElementById("diceNumber2").innerHTML= r2;

  document.getElementById("diceImage2").src= diceImage2Src;

  if (r1 + r2 === 7){
    diceResult = "You did it! You got a 7!"
  }

  else {
    diceResult = "Better luck next time!"
  }

  document.getElementById("result").innerHTML= diceResult;
}
