
class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
}
  



class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }

    buyHamster(hamster){
    
      this.mood+=10
        this.bankAccount -= hamster.getPrice()
        this.hamsters.push(hamster)
    }
}
 


// _________________________________________________________________________

console.log("%c    Hamster    ", "color:blue")


const timmy = new Person('Timmy')
// for (let i = 0; i < 5; i++){
//     timmy.ageUp()
// }
// console.log(`${timmy.age}`)


// for (let i = 0; i < 5; i++){
//     timmy.eat();
// }
// console.log(timmy);


// for (let i = 0; i < 5; i++){
//     timmy.exercise();

// }
// console.log(timmy);

// for (let i = 0; i < 9; i++){
//     timmy.ageUp();
// }
// console.log(timmy);


// const gus = new Hamster('Gus')
// gus.owner = 'Timmy'
// timmy.buyHamster(gus)
// console.log(timmy)



// for (let i = 0; i < 15; i++){
//     timmy.ageUp();
// }
// console.log(`${timmy.age}`)


// for (let i = 0; i < 2; i++){
//     timmy.eat();
 
// }
// console.log(timmy)


// for (let i = 0; i < 2; i++){
//     timmy.exercise();

// }
// console.log(timmy)



console.log("%c Chef Make Dinners","color:blue")



class Dinner {
    constructor(appetizer, entree, dessert) {
        
        this.appetizer = appetizer;
        this.entree = entree; 
        this.dessert = dessert;
    }
    

}

class Chef{
    dinners = [];
    dinnerChoices(appetizer, entree, dessert) {
        let dinner = new Dinner(appetizer, entree, dessert)
        // return new Dinner(appetizer, entree, dessert);
        this.dinners.push(dinner);
    }
    
}
 


const chef1 = new Chef();

chef1.dinnerChoices("soup", "grilledChicken", "fudge");
chef1.dinnerChoices("fa", "b", "c");
chef1.dinnerChoices("A", "b", "t");

console.log(chef1.dinners);




