var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumNPrint(x1, x2)
{
  var x3 = x1 + x2;
  console.log(x3);
}
SumNPrint(x,y);
SumNPrint(A,B);


if (C > z) {
  console.log(C);
} else if (C < z){
  console.log(z);
} else {
  console.log("good job!"); }

  var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
  var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

  function findTheBanana(list)
  {
    for (let i = 0; i < list.length; i++){
      if (list[i] == "Banana"){
        alert("found the Banana in " + i);
      }
    }
  }

  // findTheBanana(L1);
  // findTheBanana(L2);

  function findTheBanana(item, index)
  {
      if (item == "Banana"){
        alert("found the Banana in " + index + " array");
      }
   }

  //  L1.forEach(findTheBanana);
  //  L2.forEach(findTheBanana);

  function greetingFunc(){
    const d = new Date();
    var h = d.getHours();
    const elem = document.getElementById("dynamic")
    if (h<5) {
      elem.innerHTML="Good night, my name is Inseo";
    } else if (h<12){
      elem.innerHTML="Good morning, my name is Inseo";
    } else if (h<18) {
      elem.innerHTML="Good afternoon, my name is Inseo";
    } else if (h<20) {
      elem.innerHTML="Good evening, my name is Inseo";
    } else if (20<=h && h<24) {
      elem.innerHTML="Good night, my name is Inseo";
    }
  }

  greetingFunc();


  function addYear(){
    const year = new Date();
    var curr = year.getFullYear();
    const elem = document.getElementById("copyYear")
    elem.innerHTML += " " + curr;
    const hobbies = document.getElementById("hobbies");
    hobbies.style.display = 'none';
  }


  function showList(){
    const elem = document.getElementById("hobbies");
    elem.style.display = 'block';
  }

  $(document).ready(function() {
    $("#readMore").click(function() {
      $("#shortBio").hide();
      $("#longBio").show();
      $("#readMore").hide();
      $("#readLess").show();
    });
    
    $("#readLess").click(function() {
      $("#longBio").hide();
      $("#shortBio").show();
      $("#readLess").hide();
      $("#readMore").show();
    });
  });


  function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const validationMessage = document.getElementById("validationMessage");
    
    validationMessage.innerHTML = "";
    validationMessage.style.display = "none";
    
    let isValid = true;
    let errorMessages = [];
    
    if (!name.checkValidity()) {
      isValid = false;
      errorMessages.push("Please enter a name");
      name.classList.add("invalidIput");
    } else {
      name.classList.remove("invalidInput");
    }
    
    if (!email.checkValidity()) {
      isValid = false;
      errorMessages.push("Please enter a valid email address");
      email.classList.add("invalidInput");
    } else {
      email.classList.remove("invalidInput");
    }
    
    if (!message.checkValidity()) {
      isValid = false;
      errorMessages.push("Please enter a message");
      message.classList.add("invalidInput");
    } else {
      message.classList.remove("invalidInput");
    }
    
    if (!isValid) {
      validationMessage.style.display = "block";
      validationMessage.innerHTML = errorMessages.join("<br>");
    } else {
      alert("Form submitted successfully!");
      document.getElementById("contactForm").submit();
    }
  }