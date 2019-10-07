let linkText

// selectText()
//
//
function mouseOn(link) {

  if (link === 1) {
    linkText = "Basic HTML";
    document.getElementById("exercise1").innerHTML= linkText;
  }
  else if (link === 2) {
    linkText = "CSS Positioning";
    document.getElementById("exercise2").innerHTML= linkText;
  }
  else if (link === 3) {
    linkText = "CSS Styling";
    document.getElementById("exercise3").innerHTML= linkText;
  }
  else if (link === 4) {
    linkText = "Basic Javascript";
    document.getElementById("exercise4").innerHTML= linkText;
  }
}

function mouseOff(link){
  if (link === 1) {
    linkText = "Exercise 1";
    document.getElementById("exercise1").innerHTML= linkText;
  }
  else if (link === 2) {
    linkText = "Exercise 2";
    document.getElementById("exercise2").innerHTML= linkText;
  }
  else if (link === 3) {
    linkText = "Exercise 3";
    document.getElementById("exercise3").innerHTML= linkText;
  }
  else if (link === 4) {
    linkText = "Exercise 4";
    document.getElementById("exercise4").innerHTML= linkText;
  }
}
