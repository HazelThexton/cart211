// sayHello()
//
//
function sayHello() {
  var nameFirst = document.getElementById("nameFirst").value;
  var nameLast = document.getElementById("nameLast").value;

  document.getElementById("hello").innerHTML= "Hello "+ nameFirst + " " + nameLast + "!";
}

// rate()
//
//
function rate() {
  var rating = document.getElementById("rating").value;

  if (rating>10){
    document.getElementById("response").innerHTML= rating + "???? It's off the charts!!!";
  }
  else if (rating>7){
    document.getElementById("response").innerHTML= rating + "? Awesome! I'm glad.";
  }
  else if (rating>4){
    document.getElementById("response").innerHTML= rating + "? Well, that's okay, but not great.";
  }
  else if (rating<=4){
    document.getElementById("response").innerHTML= rating + "? That sucks, sorry to hear that.";
  }
  else {
    document.getElementById("response").innerHTML= rating + "? What is that supposed to mean??";
  }
}
