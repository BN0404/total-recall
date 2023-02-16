// // Example of What your JS File in VS Code should look like


// /*
// 	Remember!!! Once you’ve completed a problem,
// 	COMMENT OUT YOUR WORK before moving on to the next one.
// 	This makes it easier to read and debug the current
// 	Solution you are working on.
// */


// // I. Variables & Data Types
// // A. Q + A

// 1; // console.log("%c   How do we assign a value to a variable?   ", "color: blue");
// // We assign a value to a variable using var, let and const. The best way to assign the value to a variable is by let and const. As shown in the below example.

// // var value = "Total Recall";
// // let value1 = "Total Recall1";
// // const value2 = "Total Recall2";
// // console.log(value);

// // 2. console.log("%c   How do we change the value of a variable?   ", "color: blue");
// // First define the value to the variable and then we can change it by using the same name and giving a different value but it can't be done for a const. As shown below:

// // let new_value = "Stated JS";
// // new_value = "Learning JS is Fun";
// // console.log(new_value);

// // 3. console.log("%c   How do we assign an existing variable to a new variable?   ", "color: blue");
// // We assign an exciting variable to a new variable just by defining a new variable using let, var or const and giving a different name. As shown in the below example:
// // var existingVar1 = "Exciting";
// // var existingVar2 = existingVar1
// // console.log(existingVar);

// // 4. console.log("%c   Remind me, what are declare, assign, and define?   ", "color: blue");
// // We declare in three ways like var, const and let.
// // Assign means is to give a value to the declared variable.
// // define means define() function can be used to load the modules. Module means object, function, class or a code.

// // 5. console.log("%c   What is pseudocoding and why should you do it?   ", "color: blue");
// // Pseudocoding is means informal way of writing programs (algorithm) without using any code, just in simple language and breaking it down into smaller chunks. It helps in understanding the code by anyone like BA, Manager, Client. It also makes it easier to understand and bugging.

// // 6. console.log("%c      "What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?, "color: blue");
// // I think it is important to spent more time in understanding the problem and then spent required time is coding. As understanding is more important before starting anything.

// // B. Strings
// // console.log("%c   String   ", "color: blue");
// // var firstVariable = "Hello World";
// // var firstVariable = 4;
// // var secondVariable = firstVariable;
// // var secondVariable = ["A", 4];
// // console.log(`${firstVariable}`);// It's the latest assign value that is 4 in this case.

// // let yourName = ["in_bn"];
// // console.log("Hello, my name is " + yourName);

// // C. Booleans
// // console.log("%c   Booleans   ", "color: blue");
// //   const a = 4;
// //   const b = 53;
// //   const c = 57;
// //   const d = 16;
// //   const e = 'Kevin';

// //   console.log(a < b);
// //   console.log(c > d);
// //   console.log(e === 'Kevin');
// //   // FOR THE NEXT TWO, USE ONLY && OR ||
// //   console.log(true != false);
// //   console.log(false != false != false != false != false != true);
// //   console.log(false == false)
// //   console.log(e == 'Kevin');
// //   console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// //   console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
// //   console.log(48 == '48');

// // D. The Farm
// // console.log("%c          The Farm   ", "color: blue");
// // var animal = "cow";

// // if (animal == "cow") {
// //   console.log(`Mooooo`);
// // } else {
// //   console.log(`Hey! You're not a cow`);
// // }

// // E. Driver's Ed
// // console.log("%c          Driver's Ed   ", "color: blue");


// // var age = Math.floor(Math.random() * 100);
// // console.log(`Age of the person is ${age}`)
// // if (age >= 16) {
// //   console.log("Here are the keys!");
// // } else {
// //   console.log("Sorry, you're too young");
// // }

// // _____________________________________________________________

// // II. Loops
// // console.log("%c          1. Loops: The Basic      ", "color:blue");


// // for (let i = 0; i <= 10; i++) {
// //     console.log(`${i}`);
// // }

// // };

// // console.log("%c         2. Loops      ", "color:blue");



// // for (let i = 10; i <= 400; i++){
// //     console.log(`${i}`);
// // }

// // console.log("%c         3. Loops       ", "color:blue");

// // let num12 = 12;

// // for (i = 12; i <= 4000; i++){
// //     console.log(`${num12}`);
// //     num12 = num12 + 3;
// //     if (num12 >= 4000) {
// //         break;
// //     };
// // }

// // console.log("%c         B.Get Even       ", "color:blue");



// // for (i = 0; i <= 100; i++){
// //     if (i % 2 == 0) {
// //         console.log(`${i} <-- is an even number`);
// //     } else{
// //         console.log(`${i}`);
// //     }
// // }

// //console.log("%c         C. Give me Five       ", "color:blue");

// // let num = 0;

// // for (let i = 0; i <= 100; i++){
// //     let found = true
// //     if (num % 3 == 0 && num % 5 == 0) {
// //         console.log(`I found a ${num}. High Five! Three is a crowd`)
// //        found = false
// //     }
// //     else if (num % 5 == 0 && found == true) {
// //     console.log(`I found a ${num}. High Five!`)
// //     }
// //     else if(num % 3 == 0 && found==true) {
// //         console.log(`I found a ${num}. Three is a crowd.`)
// //     }

// //     num = num +1;

// // }

// // D. Savings account
// // let bank_account=0;

// // for (i = 0; i <= 10; i++){
// //     bank_account = bank_account + i;
// // }
// // console.log(bank_account);

// // let bank_account = 0;
// // for (i = 1; i <= 100; i++){
// //     bank_account = bank_account + i;

// // } bank_account = bank_account * 2;
// // console.log(bank_account)

// // _____________________________________________________________

// // III. Arrays & Control Flow
// // A. Talk about it:
// // B. Easy Does It
// // const quotes = Array [ "A", "B", "C"];

// // // C. Accessing elements
// // const randomThings = [1, 10, "Hello", true];
// // console.log(randomThings)
// // var firstValue = randomThings[0];
// // randomThings[2] = "World";
// // console.log(randomThings);

// // D. Change values
// // const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// // var thirdValue = ourClass[2];
// // ourClass[4] = "Octocat";
// // ourClass[5] = "Cloud City";
// // console.log(ourClass);

// // E. Mix It Up
// // const myArray = [5, 10, 500, 20]
// // console.log(myArray);
// // myArray.push("Aegon");
// // console.log(myArray);
// // myArray.push("Hi");
// // console.log(myArray);
// // myArray.shift();
// // console.log(myArray);
// // myArray.unshift("Bob Marley");
// // console.log(myArray);
// // myArray.pop();
// // console.log(myArray);
// // myArray.reverse();
// // console.log(myArray);

// // Yes we mutated the array as it is stored in the same location.

// // F. Biggie Smalls

// // var int = 105;
// // if (int < 100) {
// //     console.log("little number");
// // } else {
// //     console.log("big number");
// // }

// // G. Monkey in the Middle
// // var int = 5;

// // if (int < 5) {
// //     console.log("little number");
// // } else {
// //     if (int > 10) {
// //         console.log("big number")
// //     } else {
// //      console.log("monkey")
// //     }
// // }

// // H. What's in Your Closet?
// // const kristynsCloset = [
// //     "left shoe",
// //     "cowboy boots",
// //     "right sock",
// //     "Per Scholas hoodie",
// //     "green pants",
// //     "yellow knit hat",
// //     "marshmallow peeps"
// //   ];

// // console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// // console.log(kristynsCloset);
// // kristynsCloset.splice(6, 0, "rayban");
// // console.log(kristynsCloset);
// // kristynsCloset[5] = "stained knit hat"
// // console.log(kristynsCloset);
// // Thom's closet is more complicated. Check out this nested data structure!!
// //   const thomsCloset = [
// //     [
// //       // These are Thom's shirts
// //       "grey button-up",
// //       "dark grey button-up",
// //       "light blue button-up",
// //       "blue button-up",
// //     ],[
// //       // These are Thom's pants
// //       "grey jeans",
// //       "jeans",
// //       "PJs"
// //     ],[
// //       // Thom's accessories
// //       "wool mittens",
// //       "wool scarf",
// //       "raybans"
// //     ]
// //   ];
// // thomsCloset[0][0];
// // thomsCloset[1][2];
// // thomsCloset[2][2];

// // console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);

// // thomsCloset[1][2] = "Footie Pajamas";

// //_____________________________________________________________

// // IV. Functions
// // A.
// // function printGreeting(greeting) {
// //     console.log(greeting);
// // }
// // let n = printGreeting("Hello there, Slimmer");

// // B.

// // function printCool(name) {
// // console.log(`Indu ${name}`)
// // }
// // let b = printCool(`is cool`)

// // C.
// // const vol;

// // function calculateCube(a){
// //     vol = Math.pow(a, 3);
// //     console.log(`Volume of the cube is ${vol}`)
// // }

// // const a = calculateCube(Math.round(Math.random()*10));

// // D.

// //     function isVowel(char) {
// //     char = char.toLowerCase();
// //         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
// //             console.log(` ${char}: Letter is a vowel`);
// //             return true;
// //         } else {
// //             return false;
// //         }
// //     }

// // let char = isVowel("a");

// // E.

// // arrayLength = new Array;
// // arrayReturn = new Array;
// // function getTwoLengths(a, b) {

// //     arrayLength[0] = a.length;
// //     arrayLength[1] = b.length;
// //     return arrayLength;

// // }

// // arrayReturn = getTwoLengths("Happy", "Cooder");
// // console.log(`[${arrayReturn[0]}, ${arrayReturn[1]}]`);

// // F.
// // arrayLength1 = new Array;
// // arrayReturn1 = new Array;
// // function getTwoLengths(a, b, c, d, e ,f) {

// //     arrayLength1[0] = a.length;
// //     arrayLength1[1] = b.length;
// //     arrayLength1[2] = c.length;
// //     arrayLength1[3] = d.length;
// //     arrayLength1[4] = e.length;
// //     return arrayLength1;

// // }

// // arrayReturn1 = getTwoLengths("Happy", "Cooder", "happy", "valentine", "day" );
// // console.log(`[${arrayReturn1[0]}, ${arrayReturn1[1]}, ${arrayReturn1[2]}, ${arrayReturn1[3]}, ${arrayReturn1[4]}]`);

// // G.
// // const a = Math.round(Math.random() * 10);
// // const b = Math.round(Math.random() * 10);
// // const c = Math.round(Math.random() * 10);
// // console.log(`a = ${a}, b = ${b} and c = ${c}`);

// // function maxOfThree(a, b, c) {
// //     if (a >= b && a >= c) {
// //         return a;
// //     } else if (b >= a && b >= c) {
// //         return b;
// //     } else if (c >= a && c >= b) {
// //         return c;
// //     }
// // }

// // const biggestNumber = maxOfThree(a, b, c);
// // console.log(`${biggestNumber} is the biggest of all the three numbers`);

// // // H.
// // const arrayLong = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];

// // let string = "";
// // let max = 0;

// // function printLongestWord(longestArray) {
   
// //     for (let i = 0; i < longestArray.length; i++){
// //         if (max < longestArray[i].length) {
// //             string = longestArray[i];
// //             max = longestArray[i].length;
// //         }
    
// //     } return string;
// // }

// // const newMax = printLongestWord(arrayLong);
// // console.log(`${max}`)
// //_____________________________________________________________

// // V. Objects
// // A.

const user = {
  name4: "Bhagwati",
  email: "in_ghu@gmail.com",
  age: 6,
  purchased: [],
};

// B.
console.log(user);
user.email = "insiVinci@zoo.com";
console.log(user);

user.age++;
console.log(user);
// C.

user.location = ["pittsburgh", "PA"];
console.log(user);

// D.
user.purchased.push("carbohydrates");
console.log(user);
// E.

user.purchased.push("peace of mind");

// F.
user.purchased.push("Merino jodhpurs");

console.log(`${user.purchased[2]}`);

// G.
console.log("%cG. Function     ", "color:blue");
user.friend = {
    name4: "AAVIS",
    age: 10,
    location: "NY",
    purchased:[]
}
console.log(`${user.friend.name4}`);
console.log(`${user.friend.location}`);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");

console.log(`${user.friend.purchased[1]}`)

//F 1.
console.log("%cF1 String     ", "color:blue");

string=" "

for (i = 0; i <= 2; i++) {
    string = string + ", " + user.purchased[i];
    
}

console.log(`${string}`);


// F 2.
console.log("%cF2 String     ", "color:blue");
string=" "

for (i = 0; i <= 1; i++) {
    string = string + ", " + user.friend.purchased[i];
    
}

console.log(`${string}`);


// G 1.

console.log("%cG1 Function     ", "color:blue");
function updateUser() {
    user.age = user.age+1;
    user.name4 = user.name4.toUpperCase();

}

const x = updateUser(user.age, user.name4);

console.log(`${user.age}  ${user.name4}`)

// G 2.

console.log("%cG2 Function     ", "color:blue");

function oldAndLoud(person) {

    person.age++;
    person.name4.toUpperCase();
    return person
    } 

const y = oldAndLoud(user);

console.log(y);

// const oldAndLoud = (person) => {

// }





