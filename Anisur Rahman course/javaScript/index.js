/*
var text = "Bangladesh";
// var len = text.length;

// document.write(len);
// document.write(" Number of character " + len);
document.write(" Number of character " + text.length);
*/

/*
var text = prompt("Enter your name : ");
document.write(" Number of character " + text.length);
*/

/*
var text = "Bangladesh";
document.write(text.charAt(2));
*/

/*
var text = "Bangladesh";
text = text.toUpperCase();
document.write(text);
*/

/*
var text1 = "Bangladesh";
var text2 = " is a beautiful country";

document.write(text1.concat(text2));
*/

/*
var text1 = "Bangladesh";
var text2 = " is a beautiful country";

text = text1.concat(text2);

document.write(text);
*/

/*
var text1 = "Bangladesh";
var text = text1.slice(0, 2);

document.write(text);
*/

/*
var firstName = "Borshon";
var lastName = " Arafat";
Name = firstName.concat(lastName).toUpperCase();


document.write(Name);
document.write(Name.length);
document.write(Name.charAt(1));
*/
/*
var num1 = 20;
var num2 = 10;

var sum, sub;

sum = num1 + num2;
document.write("Sum = " + sum + "<br/>");

sub = num1 - num2;
document.write("Sub = " + sub);
*/

/*
var num1 = prompt("Enter first Number: ");
var num2 = prompt("Enter second Number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var num, sub, mul, div, mod;

sum = num1 + num2;
document.write(num1 + " + " + num2 + " = " + sum + "<br/>");

sub = num1 - num2;
document.write(num1 + " - " + num2 + " = " + sub + "<br/>");

mul = num1 * num2;
document.write(num1 + " * " + num2 + " = " + mul + "<br/>");

div = num1 / num2;
document.write(num1 + " / " + num2 + " = " + div + "<br/>");

mod = num1 % num2;
document.write(num1 + " % " + num2 + " = " + mod);
*/

/*
var base = prompt("Enter Base = ");
var height = prompt("Enter Height = ");

var area = base * height;
document.write("Area = " + area);
*/

/*
var base = parseFloat(prompt("Enter Base = "));
var height = parseFloat(prompt("Enter Height = "));

var area = base * height;
document.write("Area = " + area);
*/

/* 
var base = parseFloat(prompt("Enter Base = "));
var height = parseFloat(prompt("Enter Height = "));

var area = (base * height) / 2;
document.write("Area = " + area);
*/

/*
var farn = parseFloat(prompt("Enter Farenheight = "));

var cels = (farn - 32) * (5/9);

document.write("Celcius = " + cels);
*/

/*
var cels = parseFloat(prompt("Enter celcius = "));

var farn = (cels * (9/5)) + 32;

document.write("Fahrenheit = " + farn);
*/
/*
var num = 6;

if (num% 2 == 0)
  console.log("Even");

if (num% 2 != 0)
  console.log("Odd");
*/
/*
var num = 5;

  if(num% 2 == 0)
    console.log("Even");
  else
    console.log("Odd");
*/

/*
var marks = prompt("Enter your marks: ");

if (marks>= 80)
    console.log("A+");
  else if (marks>= 70)
    console.log("A");
  else if (marks>= 60)
    console.log("A-");
  else if (marks>= 50)
    console.log("B");
  else if (marks>= 40)
    console.log("C");
  else if (marks>= 33)
    console.log("D");
else 
  console.log("Fail");
*/

/* 
var marks = prompt("Enter your marks : ");

  if (marks> 100 || marks < 0)
      console.log("Invalid marks");
    else if (marks>= 80 && marks <= 100)
      console.log("A+");
    else if (marks>= 70 && marks <= 100)
      console.log("A");
    else if (marks>= 60 && marks <= 100)
      console.log("A-");
    else if (marks>= 50 && marks <= 100)
      console.log("B");
    else if (marks>= 40 && marks <= 100)
      console.log("C");
    else if (marks>= 33 && marks <= 100)
      console.log("D");
  else
      console.log("Fail");
*/

/*
var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num3 : ");

if (num1>num2 && num1>num3)
  console.log("Large number = " + num1);

else if (num2>num1 && num2>num3)
  console.log("Large number= " + num2);

else 
  console.log("Large number = " + num3);
*/

// Vowel / Consonant 

/* 
var letter = prompt("Enter a letter : ");

letter = letter.toLowerCase();

  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")

    console.log("Vowel");

    else 

    console.log("Consonant");
*/

/*
var digit = prompt("Enter any digit : ");

    if (digit == 0)
        console.log("Zero");
    else if (digit == 1)
        console.log("One");
    else if (digit == 2)
        console.log("Two");
    else if (digit == 3)
        console.log("Three");
    else if (digit == 4)
        console.log("Four");
    else if (digit == 5)
        console.log("Five");
    else if (digit == 6)
        console.log("Six");
    else if (digit == 7)
        console.log("Seven");
    else if (digit == 8)
        console.log("Eight");
    else if (digit == 9)
        console.log("Nine");
    else 
        console.log("Not a digit");
*/

// Switch, case, break, default

/* 
var digit = prompt("Enter any digit : ");

    switch(digit) {
        case "0":
          console.log("Zero");
          break;
        case "1":
          console.log("One");
          break;
        case "2":
          console.log("Two");
          break;
        case "3":
          console.log("Three");
          break;
        case "4":
          console.log("Four");
          break;
        case "5":
          console.log("Five");
          break;
        case "6":
          console.log("Six");
          break;
        case "7":
          console.log("Seven");
          break;
        case "8":
          console.log("Eight");
          break;
        case "9":
          console.log("Nine");
          break;
        default:
          console.log("Not a digit");
    }
  */

/* 
var digit = prompt("Enter any digit : ");

digit = digit.toLowerCase();


    switch(digit) {
      case "a":
        console.log("Vowel");
        break;
      case "e":
        console.log("Vowel");
        break;
      case "i":
        console.log("Vowel");
        break;
      case "o":
        console.log("Vowel");
        break;
      case "u":
        console.log("Vowel");
        break;
     default:
        console.log("Consonent");
    }
    */

  /*
   var letter = prompt("Enter any letter : ");
    letter = letter.toLowerCase();

        switch(letter) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            console.log("Vowel");
            break;

          default:
            console.log("Consonant");
        }
  */
 /* 
 for(var x = 1; x <= 10; x = x + 1) {
   document.write("<h1>Bangladesh</h1>");
 }

 document.write("<h1>End</h1>");
 */

 /* 
 for(var x = 1; x <= 10; x = x + 1) {
   document.write(" " + x);
 }

   document.write("<h1>End</h1>");
   */

/* 
for(var x = 1; x <= 99; x = x + 2) {
    document.write(" " + x);
}

document.write("<h1>End</h1>");
*/

/* 
for(var x = 2; x <= 100; x = x + 2) {
  document.write(" " + x);
}
  document.write("<h1>End</h1>");
  */

/* 
for(var x = 10; x >= 1; x = x - 1) {
    document.write(" " + x);
}  
    document.write("<h1>End</h1>");
*/

/* 
var sum = 0;

for (var x = 5; x <= 10; x = x + 1) {
    sum = sum + x;
}

    document.write(sum);
*/

/* 
var m = parseInt(prompt("Enter the Starting number : "));
var n = parseInt(prompt("Enter the last number : "));

var sum = 0;

for (var x = m; x <= n; x = x + 1) {
    sum = sum + x;
}

document.write(sum);
*/

/* 
for (var x = 1; x <= 5; x++) {
    var num1 = parseInt(prompt("Enter the first number : "));
    var num2 = parseInt(prompt("Enter the second number : "));

    var sum = num1 + num2;

        document.write("Result = " + sum);
}
*/

/* 
var i = 1;

while (i <= 100) {
    document.write(" " + i);
      i = i + 1;
}
*/

/*
var i = 1;

while (i <= 5) {
    document.write(" " + i);
    i = i + 1;
}
*/
/*
var i = 1;
var sum = 0;

while (i <= 10) {
    sum = sum + i;
    i = i + 1;
}

document.write(sum);
document.write("<h1>end</h1>");
*/

/*
var i = 2;
var sum = 0;

while (i <= 100) {
    sum = sum + i;
    i = i + 2;
}

document.write("Sum is = " + sum);
document.write("<h1>end</h1>");
*/ 
/* 
var i = 1;
var sum = 0;

while (i <= 50) {
    if (i%3==0 && i%5==0) {
      document.write(" " + i);
        sum = sum + i;
    }
    i = i + 1;
}

document.write(" " + sum);
document.write("<h1>end</h1>");
*/

/*
var i = 1;

do {
  document.write(" " + i);
  i++;
}while(i <=10);
*/

/*
for (var i = 1; i <= 100; i++) {
  if(i==10) {
    break;
  }
  document.write(" " + i);
}

document.write("end");
*/

/* 
for (var i = 1; i <= 100; i++) {
  document.write(" " + i);

  if(i==10) {
    break;
  }
}
document.write("end");
*/

/* 
for (var i = 1; i <= 100; i++) {
  if (i==10) {
    continue;
  }
  document.write(" " + i);
}

document.write("end");
*/

/*
for (var i = 1; i <= 100; i++) {
  document.write(" " + i);

  if (i==10) {
    continue;
  }
}
document.write("end")
*/

/*
for (var i = 1; i <= 100; i++) {
  if (i%2 != 0) {
    continue;
  }
  document.write(" " + i);
}

document.write("end");
*/

/*
var number = Number(prompt("Enter a number : "));
var result = number>0? "Positive" : "Negative"
console.log(result);
*/

/*
var number = Number(prompt("Enter a number : "));
number>0? console.log("Positive") : console.log("Negative");
*/
/*
var number = Number(prompt("Enter a number : "));
if (number>0) {
    console.log("Positive");
} 
else if (number<0) {
    console.log("Negative");
} 
else 
{
    console.log("Zero");
}
*/
/*
var number = Number(prompt("Enter a number : "));
var result = number>0? "Positive" : number<0? "Negative" : "Zero";
console.log("Zero");
*/

//Craating a function
/*
function square() {
  var num = 5;
  var result = num * num;
  document.write("Result = " + result + "<br>");
}

// Calling a function
  square();
  square();
  */

  /*
  function square(num) {
    var result = num * num;
    document.write("Result = " + result + "<br>");
  }

  square(5);
  square(6);
  square(8);
  */

  /* 
  function square(num1, num2) {
    var result = num1 * num2;
    document.write("Result = " + result + "<br>");
  }

    square(5, 6);
    square(6, 8);
  */

 /* 
  function square(num1, num2) {
      var result = num1 * num2;
      return result;
  }
   var x = square(5, 6);
   document.write(x);
   */

   // add function
  /* 
  function addition(x, y) {
    var result = x + y;
    document.write("sum = " + result + "<br>");
  }

  addition(10, 20);
  */

 /*
  function subtraction(x, y) {
    var result = x - y;
    document.write("Sub = " + result + "<br>");
  }

    subtraction(20, 10);
    */

    /*
    var names = new Array(5);
      names[0] = "Anis";
      names[1] = "Lima";
      names[2] = "Shipa";
      names[3] = "Rinku";
      names[4] = "Tikku";

      console.log(names[2]);
      console.log(names[4]);
      */

/*  var names = ["Anisul", "Lima", "Shipa", "Runku", "Tikku"];

      console.log(names.length);
      console.log(names);
      console.log(names[4]);
*/

/*
var names = ["Anisul", "Lima", "Shipa", "Rinku", "Tikku"];

names.push("Sokina");
console.log(names);
console.log(names[5]);
*/

/*
var names = ["Anisul", "Lima", "Shipa", "Rinku", "Tikku"];

console.log(names.length);
names.push("Sokina");
console.log(names.length);

names.pop();
console.log(names);
*/

/*
var country1 = ["Bangladesh", "India"];
var country2 = ["Pakisthan", "Nepal"];

var country = country1.concat(country2);

console.log(country);
*/

/*
var num = [10,20,30,40,50];

  for(var i = 0; i<5; i++) {
    console.log(num[i]);
  }
*/
/*
var num = [10,20,30,40,50];
var sum = 0;

for (var i=0; i<5; i++) {
  console.log(num[i]);
  sum = sum + num[i];
}

console.log("Sum = " + sum);
*/

/*
var num = new Array();

    for(var i=0; i<5; i++) {
      num[i] = parseInt(prompt("Enter a number: "));
    }

    var sum = 0;
    for(var i=0; i<5; i++) {
      console.log(num[i]);
   
    }

    console.log("Sum = " + num);
    */

    //shift opposite of pop

    // var names = ["Anis", "Rabaya", "Kolpona"];

    //     console.log(names);
    //     names.shift();
    //     console.log(names);

    // //unshift opposite of push
    
    //    names.unshift("Shagor");
    //    console.log(names);
    
    // var names = ["Anis", "Rabaya", "Kolpona"];
    //     console.log(names);
    //     names.splice(2,1,"Karim","Rahim");
    //     console.log(names);

    //     var newArray = names.slice(1);
    //     console.log(newArray);

    //     var sortedNames = names.sort();
    //       console.log(sortedNames);

    //     var sortedNames = names.sort();
    //         names.reverse();
    //         console.log(sortedNamed);
  
  // var numbers = [20, 5, 25, 45, 1];
  //     numbers.sort(function(b,a){
  //       return b-a;
  //     })

  //     console.log(numbers);

  // var student1 = {
  //   name : "Anisul Islan",
  //   age : 27,
  //   cgpa : 3.92,
  //   lang : ["Bengali", "Hindi", "English"]
  // }

  //   console.log(student1.age);

  //adding a constructor

  /*
  function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.cgpa);
      console.log(this.lang);
    }
  }

  var student1 = new Student("Anisul Islam", 27, 3.92, ["Bengali", "Hindi", "English"]);
  var student2 = new Student("Anisul", 27, 3.92, ["Bengali", "Hindi", "English"]);
  var student3 = new Student("Islam", 27, 3.92, ["Bengali", "Hindi", "English"]);

  student1.display();
  */

  // var num1 = parseInt(prompt('Enter first number : '));
  // var num2 = parseInt(prompt('Enter second number : '));

  // var maximum = Math.max(num1, num2);
  // console.log(maximum);

//   var numOfWon = 0;
//   var numOfLost = 0;

//       for (var i=1; i<=5; i++) {
//       var guessNumber = parseInt(prompt('Enter a number from 1 to 5 : '));
//       var randomNumber = Math.floor(Math.random()*5) + 1;
//         if(guessNumber==randomNumber) {
//             console.log('You have won');
//             numOfWon++;
//         } else {
//             console.log('You have lost. Random number was' + randomNumber);
//             numOfLost++;
//         }
//     }

//  document.write('Number of won = ' + numOfWon + '<br>');
//  document.write('Number of Lost = ' + numOfLost);

// var date = new Date();
// console.log(date);

// var year = date.getFullYear();
// console.log(year);

// var month = date.getMonth();
// console.log(month);

// var currentDate = date.getDate();
// console.log(currentDate);

// var currentDay = date.getDay();
// console.log(currentDay);

// var currentHour = date.getHours();
// console.log(currentHour);

// var currentMinutes = date.getMinutes();
// console.log(currentMinutes);

// document.getElementById('heading1').innerHTML = "Hello";

// 

// document.querySelector('#pid').innerHTML = 'This is changed';

// document.querySelector('.pid').innerHTML = 'This is Changed';
// document.querySelector('h1').innerHTML = 'This is Omaik';
// document.querySelector('a').innerHTML = "new text";

// document.querySelector('li a').innerHTML = 'New text';

// document.querySelector('.my-div a').innerHTML = 'New text';

// function myMessage1() {
//   alert('Hello Everyone 1');
// }

// function myMessage2() {
//   alert('Hello Everyone 2');
// }

// function myMessage3() {
//   alert('Hello my boy');
// }

// var myVar = document.querySelector('#para');

// function myMessage1() {

//   myVar.innerHTML = 'You have clicked on button 1';
// }

// function myMessage2() {
//   myVar.innerHTML = 'You have clicked on button 2';
// }

// var myVar = document.querySelector('#myImage');

//   function myPicture1() {
//     myVar.src = "images/1.jpg";
//   }

//   function myPicture2() {
//     myVar.src = "images/2.jpg";
//   }

// var myVar = document.querySelector('#paraId');

// function addStyle() {
//   myVar.classList.add('para-style');
// }

// function removeStyle() {
//   myVar.classList.remove('para-style');
// }

// document.querySelector('button').addEventListener('click', myFunction);

// function myFunction() {
//   alert('hello');
// }

// document.querySelector('button').addEventListener("click", function() {
//   alert('Hello');
// });

// var myVar = document.querySelector('h1');

// myVar.addEventListener("mouseover", function(){
//   myVar.classList.add('my-style');
// });


// myVar.addEventListener("mouseout", function(){
//   myVar.classList.remove('my-style');
// });

// document.querySelectorAll('.myButton')[0].addEventListener('click', function(){
//   var text = this.innerHTML;
//   document.querySelector('h1').innerHTML = text + ' is clicked';
// });

// document.querySelectorAll('.myButton')[1].addEventListener('click', function(){
//   var text = this.innerHTML;
//   document.querySelector('h1').innerHTML = text + ' is clicked';
// });

// document.querySelectorAll('.myButton')[2].addEventListener('click', function(){
//   var text = this.innerHTML;
//   document.querySelector('h1').innerHTML = text + ' is clicked';
// });

// for(var i=0; i<3; i++) {
//   document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
//     var text = this.innerHTML;
//     document.querySelector('h1').innerHTML = text + ' is clicked';
//   });
// };

// var len = document.querySelectorAll('.myButton').length;

// for(var i=0; i<len; i++) {
//   document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
//     var text = this.innerHTML;
//     document.querySelector('h1').innerHTML = text + ' is clicked';
//   });
// };

// document.querySelectorAll('.myButton')[0].addEventListener('click', function(){

// })

// for(var i=0; i<3; i++) {
  
// document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
//   var text = this.innerHTML;
//   audioPlay(text);
//   playAnimation(text);

// });

//    document.addEventListener('keypress', function(event){
//      var text = event.key;
//      audioPlay(text);
//      playAnimation(text);
//    })
// }

// function audioPlay(text) {
//   switch(text) {
//     case 'a':
//       var audio = new Audio('sounds/a.mp3.mp3');
//       audio.play();
//       break;
//     case 'b':
//       var audio = new Audio('sounds/b.mp3.mp3');
//       audio.play();
//       break;
//     case 'c':
//       var audio = new Audio('sounds/c.mp3.mp3');
//       audio.play();
//       break;
//   }
// }

// function playAnimation(text) {
//  var selectButton = document.querySelector('.', text);
//   selectButton.classList.add('anim');
  
//   setTimeout(function(){
//     selectButton.classList.remove('anim');
//   }, 1000);
// }


  // var count = 0;
  // document.querySelector('textarea').addEventListener('keypress', function(event){
  //   count++;
  //   text = event.key;
  //   document.querySelector('p').innerHTML = "You have pressed " + count;
  // });
  
// alert("Hi Everyone");
// alert(x);
// alert("Bye Everyone");

// try {
//   alert("hi Everyone");
//   alert(x);
//   alert("Bye Everyone");

// } catch(err) {
//   console.log("Inside catch block");
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }

// try {
//   alert("Hi Everyone");
//   alert(x);
// } catch {
//   console.log(err);
// } finally {
//   alert("Bye Everyone");
// }

// document.querySelector("#checkButton").addEventListener('click', function(){
//   var num = document.querySelector("#numTextfield").nodeValue;

//  try {
//    if(num < 5){
//      throw "input is too low";
//    } else if (num > 10)
//    {
//      throw "input is too high";
//    }
//  } catch(err) {
//    console.log(err);
//  }
// })


// BANGLADESH FLAG // 
// var c = document.getElementById("myCanvas");

// var ctx = c.getContext("2d");
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = "black";
//     ctx.strokeRect(10,10,380,280);
    
//     ctx.fillStyle = "green";
//     ctx.fillRect(12,12,378,278);

//     var centerX = c.width/2;
//     var centerY = c.height/2;

//     ctx.beginPath();
//     ctx.arc(centerX, centerY, 80, 0, 2*Math.PI, false);
//     ctx.fillStyle = "red";
//     ctx.fill();
//     ctx.stroke();
    
// let name = "Anisul Islam";
// let message = `I am ${name} I am learning JavaScript`;
// console.log(message);
    // const add = (x,y) => {
    //   let sum = x + y;
    //   console.log(sum);
    // }

// "use strict"
// function message() {
//   console.log("Welcome");
// }
// message();
// "use strict"
// function message(text) {
//   console.log(`${text}`)
// }

// message("I love js es6");
// "use strict"
// function message(text = "Hello this is default parameter") {
//   console.log(`${text}`)
// }

// message();
// message("I love js es6");
// function sum(x, y) {
//   console.log(`${x}, ${y}`)
// }

//   sum(10, 20);

// function sum(x, y, ...z) {
//   console.log(`x = ${x}, y = ${y}, z = ${z}`)
// }

// sum(10, 20, 30, 40, 50);
// function addNumbers(x, y, z) {
//   return x + y + z;
// }

// let numbers = [1,2,3]
// console.log(addNumbers(numbers[0], numbers[1], numbers[2]));

// function addNumbers(x, y, z) {
//   return x + y + z;
// }

// let numbers = [1, 2, 3]
// console.log(addNumbers(...numbers))

// function addNumbers(x, y, z) {
//   return x + y + z;
// }

// let numbers = [1, 2, 3]
// let numbers1 = [5,...numbers,6, ]
// console.log(numbers1)

// let numbers1 = [1,2,3]
// let numbers2 = [4,5,6]
// // let numbers = numbers1.concat(numbers2);
// let numbers = [...numbers1, ...numbers2]
// console.log(numbers);

// let p1 = {
//   name: "Anisul Islam",
//   age: 30
// }

// let p2 = {
//   nationality:'Bangladesh',
//   occupation: 'teacher'
// }

// let p = {...p1, ...p2}
// console.log(p);

// function studentInfo(name, age) {
//   return {
//     name: name,
//     age: age
//   }
// }

// console.log(studentInfo("Rokibul Islam", 29));

// function studentInfo1(name, age){
//   return {
//     name,
//     age
//   }
// }

// console.log(studentInfo1("Rokibul Islam", 29))

// let message = {
//   body : function() {
//     return `Hi, I am object function`
//   }
// }

// console.log(message.body());
// let message = {
//   body() {
//     return `Hi, I am object function`
//   }
// }
// console.log(message.body())

// let message = {
//   'body name' (){
//     return `Hi, I am object function`
//   }
// }

// console.log(message['body name']())

// const names = ["s1","s2","s3"]
//   for(let name of names) {
//     console.log(name)
//   }

// let students = {
//   ID : 101,
//   name : 'Anisul Islam',
//   cgpa : 3.91
// }

// for(let x in students) {
//   // console.log(students[x])\
//   console.log(`${x} : ${students[x]}`)
// }

// var numbers = [10, 20, 30, 40];
// for (var x=0; x<numbers.length; x++) {
//   console.log(numbers[x])
// }
// var numbers = [10, 20, 30, 40];

// numbers.forEach(myFunction)

// function myFunction(x) {
//   console.log(x)
// }

// var numbers = [10, 20, 30, 40];
// numbers.forEach(function(x){
//   console.log(x)
// })

// var numbers = [10, 20, 30, 40];
// var squareNumbers = [];

// numbers.forEach(function(x){
//   squareNumbers.push(x*x);
// })

// console.log(squareNumbers);

// var numbers = [10, 20, 30, 40];
// numbers.forEach(function(x, index, err){
//   err[index] = x + 5;
// })

// console.log(numbers);
// var numbers = [1,2,3,4]
// var squareNumbers = []
// numbers.forEach(function(x){
//   squareNumbers.push(x*x);
// })

// console.log(squareNumbers);
// var numbers = [2,3,4,5]
// var squareNumbers = numbers.map(function(x){
//   squareNumbers.push(x*x);
// })

// console.log(squareNumbers);

// var numbers = [2,3,4,5]
// var squareNumbers = squareNumbers.map(function(x){
//   return x * x;
// })

// console.log(squareNumbers);

// var numbers = [22, 31, 4, 5, 35, 26, 78]
// var squareNumbers = numbers.filter(function(x){
//   return x>10;
// })

// console.log(squareNumbers);
// function display1() {
//   console.log("I am display1")
// }

// display1();

// const display2 = () => {
//   console.log("I am display2")
// }

// display2();
// const display2 = () => console.log("I am display2")
// display2();

// function message1() {
//   return "Hi I am message1";
// }

// console.log(message1());

// const message2 = () => "Hi I am message2";


// console.log(message2());

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(10,20));

// const add2 = (num1, num2) => num1 + num2;
// console.log(add2(10,20));
// var students = [
//   {
//     id:101,
//     name: 'Anisul Islam',
//     gpa: 2.65
//   },
//   {
//     id:102,
//     name: 'Bijoy',
//     gpa: 3.65
//   },
//   {
//     id:103,
//     name: 'Borshon',
//     gpa: 4.65
//   },
//   {
//     id:104,
//     name: 'Arafat',
//     gpa: 5.65
//   }
  
// ]

// console.log(students);
// function studentName() {
//   return students.filter(function(x){
//     return x.gpa>3
//   }.map(function(y){
//     return y.name;
//   }));
// }

// console.log(studentName);
// const studentNames2 = () => students.filter((x) => x.gpa>3).map((y) => y.name);


// console.log(studentNames2);

// let numbers = [10, 20, 30, 40, 50]
// let [num1, num2, num3, num4, num5] = numbers

// console.log(num1);
// console.log(num2);

// const studentInfo = {
//   id:101,
//   fullName: 'Anisul Islam',
//   gpa: 3.92,
//   language: {
//     native: 'Bangla',
//     beginner: 'English'
//   }
// }
// const {id, fullName, language} = studentInfo

// console.log(language.native)

// const student = {
//   id: 101,
//   fullName: 'Anisul Islam'
// }

// const studentInfo = ({id, fullName}) => {console.log(`${id}, ${fullName}`)}

// studentInfo(student)
// let numbers = [5, 55, 14, 5, 78];
// let firstEvenNumber = numbers.find(x => x%2===0);

// console.log(firstEvenNumber);

// const evenNumber = (value) =>
//   {
//     if(value%2===0)
//     return value;
//   }

//   let firstEvenNumber = numbers.find(evenNumber);
//   let firstEvenNumberIndex = numbers.findIndex(evenNumber);
//   console.log(firstEvenNumberIndex)
//   console.log(firstEvenNumber);
// const message = "Today is friday";
// console.log(message.startsWith('Today'))
// const message = "Today is friday";
// console.log(message.endsWith('friday'))
// const message = "Today is friday";
// console.log(message.includes('friday'))

// import {text} from './myModule'
// console.log(text);
// import {text,setText} from '.myModule.js'
// setText("Goodbye to ES6");
// console.log(text);

// import {message} from '.myModule.js'
// console.log(message);

// import {text as message} from '.myModule.js'
// console.log(message);

// class student {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//   set studentName(name) {
//     this.name = name;
//   }
//   get studentInfo() {
//     return this.id + " " + this.name;
//   }
// }

// let s1 = new student(101,'Anis');

// // console.log(s1)
// // console.log(s1.id)
// // console.log(s1.name)
// // s1.studentName = "lalala";
// // console.log(s1.name)
// console.log(s1.studentInfo)

// console.log("Task1")
// console.log("Task2")
// console.log("Task3")
// console.log("Task4")
// console.log("Taks5")

// const taskOne = () => {
//   console.log("Task1");
// }

// const taskTwo = () => {
//   setTimeout(() => {
//     console.log("Task2.Data Loading");
//   }, 1000)
// }

// const taskThree = () => {
//   console.log("Task3");
// }

// const taskFour = () => {
//   console.log("Task4");
// }

// const taskFive = () => {
//   console.log("Task5");
// }

// taskOne()
// taskTwo()
// taskThree()
// taskFour()
// taskFive()

// function square(x) {
//   console.log('square of ${x}: ${x*x}')
// }

// square(5);
// const y = square
// y(5)

// const taskOne = (callback) => {
//   console.log("Task1");
//   callback();
// }

// const taskTwo = () => {
//   setTimeout(() => {
//     console.log("Task2.Data Loading");
//   }, 3000)
// }

// const taskThree = (callback) => {
//   console.log("Task3");
//   callback();
// }

// const taskFour = (callback) => {
//   console.log("Task4");
//   callback();
// }

// const taskFive = (callback) => {
//   console.log("Task5");
//   callback();
// }

// taskOne(function f1(){
//   taskTwo(function f2(){
//     taskThree(function f3(){
//       taskFour(function f4(){
//         taskFive();
//       })
//     })
//   })
// })
// taskOne(() => {
//   taskTwo(() => {
//     taskThree(() => {
//       taskFour()
//     })
//   })
// })

// console.log('hi');
// document.querySelector("button").addEventListener('click', () => {
//   console.log('button is clicked')
// });
// console.log('bye')

// const promise1 = new Promise ((resolve,reject) => {
//   let completedPromise = true;
//   if(completedPromise) {
//     resolve('completed promise 1')
//   } else {
//     reject('not completed promise 1');
//   }
// });

// console.log(promise1)
// promise1.then(res => {
//   console.log(res);
// })
// .catch(err => {
//   console.log(err)
// });

// const promise2 = new Promise((resolve,reject) => {
//   resolve("Completed Promise 2")
// });

// promise2.then((res => console.log(res));

// Promise.all([promise1, promise2])
// .then([res1, res2]) => console.log([res1, res2]);


const taskOne = () => {
  return new Promise ((resolve, reject) => {
    resolve ('task 1 is completed')
  })
}

const taskTwo = () => {
  return new Promise ((resolve, reject) => {
    resolve ('task 2 is not completed')
  })
}

const taskThree = () => {
  return new Promise ((resolve, reject) => {
    resolve ('task 3 is completed')
  })
}

const taskFour = () => {
  return new Promise ((resolve, reject) => {
    resolve ('task 4 is completed')
  })
}

// taskOne()
// .then(res => console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .catch(err => console.log(err))
// async function callAllTask() {

//   try {

//   const t1 = await taskOne();
//   console.log(t1);

//   const t2 = await taskTwo();
//   console.log(t2);

//   const t3 = await taskThree();
//   console.log(t3);

//   const t4 = await taskFour();
//   console.log(t4);

//   } catch(e) {
//     console.log(e)
//   }
 
// };

// callAllTask();