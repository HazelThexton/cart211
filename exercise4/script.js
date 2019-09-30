function sayHello() {
  var nameFirst = document.getElementById("nameFirst").value;
  var nameLast = document.getElementById("nameLast").value;

  document.getElementById("hello").innerHTML= "Hello "+ nameFirst + " " + nameLast + "!";
}
