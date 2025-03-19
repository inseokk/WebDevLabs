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

  findTheBanana(L1);
  findTheBanana(L2);

  function findTheBanana(item, index)
  {
      if (item == "Banana"){
        alert("found the Banana in " + index + " array");
      }
   }

   L1.forEach(findTheBanana);
   L2.forEach(findTheBanana);

  function greetingFunc(){
    const d = new Date();
    var h = d.getHours();
    if (h<5) {h2.innerHTML("Good night!");}
    else if (h<12){h2.innerHTML("Good Morning!");}
    else if ( h<18) {h2.innerHTML("Good afternoon!");}
    else if (h<20) {h2.innerHTML("Good evening!");}
    else if (20<h && h<24) {h2.innerHTML("Good night!");}
  }

  greetingFunc();