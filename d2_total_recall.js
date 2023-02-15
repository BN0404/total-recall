// console.log()

////////////////////////////////
// Easy Going

// let a = 1;
// for (let i = 0; i < 20; i++){
//     console.log(`${a}`)
//     a = a+1;
// }




////////////////////////////////
// Get Even
////////////////////////////////
// let a = 0;
// for (let i = 0; i <= 200; i++){
//     if (a % 2 == 0) {
//         console.log(`${a} is an even number.`);
//     } a++;
// }


////////////////////////////////
// Fizz Buzz
////////////////////////////////
// let n = 1;
// for (i = 1; i < 100; i++) {
//     let a = false;
//         if (n % 3 == 0 && n % 5 == 0) {
//             console.log(`FizzBuzz`);
//             a = true;
//         } else if (n % 3 == 0 && a== false) {
//             console.log(`Fizz`)
//         } else if (n % 5 == 0 && a==false) {
//             console.log(`Buzz`)
//         }n = n + 1;
//     }



////////////////////////////////
// Wild Wild Life
////////////////////////////////


// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = "5001";
// console.log(`${plantee}`);

// // wolfy[3] = "Gotham City";
// wolfy.splice(3, 1, "Gotham City");
// console.log(`${wolfy}`)

// dart.push = "Hawkins";
// console.log(`${dart}`);

// wolfy[0] = "Gameboy";
// console.log(`${wolfy}`);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// string = " ";
// for (i = 0; i < 3; i++){
   
//     let a = ninjaTurtle[i].toUpperCase();
//     string = string + " " + a;
// }
// console.log(`${string}`);

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(`${favMovies.indexOf('Titanic')}`);
favMovies.pop()

favMovies.push("Guardians of the Galaxy");

favMovies.reverse();

// // console.log(`${favMovies}`);
favMovies.shift();
console.log(`${favMovies}`);


favMovies.splice(14, 1, "Avatar");
console.log(`${favMovies}`);

console.log(favMovies.length);

console.log(Math.ceil(favMovies.length / 2));

let slicedArray = favMovies.slice(0,9);
console.log(`${favMovies}`);

console.log(`${slicedArray.indexOf("Fast and Furious")});


////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];


// whereIsWaldo.splice(1,1);
// console.log(`${whereIsWaldo}`);

// whereIsWaldo[1][2] = "No One"
// console.log(`${whereIsWaldo}`);

// Excited Kitten
////////////////////////////////




// let cat = 1;
// let randomNum =0;

// const kittyTalk= ["human...why you taking pictures of me?", "the catnip made me do it", "why does the red dot always get away..." ]
// for (i = 0; i <= 19; i++) {

//     randomNum = Math.ceil(Math.random() * 2);
//     cat = cat + 1;
//     console.log(`Love me, pet me! HSSSSSS!`);
//      if (cat % 2 == 0) {
//         console.log(`${kittyTalk[randomNum]}`);
//     }
// }


////////////////////////////////
//  Find the Median
////////////////////////////////
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// let sort = nums.sort();
// let a = Math.floor(nums.length / 2);

// console.log(`Median of nums is : ${nums[12]}`);





