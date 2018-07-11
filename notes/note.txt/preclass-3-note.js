object- delete

var work = {
    sucess: 'great',
    mistake:'woops'
}
delete work.mistkae;
deletwork['sucess]'

/////// DELETE
var backpack - {
    oldLaptop: 'slow',
    oldLunch: 'moldy",
    pencil: 'sharp'
}

var oldStuff = ['oldLaptop', 'oldLunch']
for (var i = 0; i<oldStuff.length; i ++){
    delete backpack[oldStuff[i]]
}
return backpack;

//////// COPY WITH ASSIGN

var obj = {
    name: 'JOE'
}

var obj2 = Object.assign({ }, obj)

///
var cat = {
    name: 'fluf'
}
var tuna 

var dogFOod = Object.assign(cat,tuna)


/////////  FOR IN LOOP

for (var prop in myObj) {
    myObj[prop];
}


///////// CLASS

class Burger {
    constructor(layers) {
        this.layers = layers;
        this.percentLeft = 100;
    }
    eat() {
        this.percentLeft--;
    }
}
    var tripleBigBoi = new Burger(3)
        tripleBigBoi.eat();
////

class Tree {
    constructor (height) {
        this.height = height;
        this.food = 'phototsynthesis'
    }
    grow() {
        this.height++;
    }
}

var oak = new Tree(10);
oak.grow();


/////// ARROW FUNCTIONS

 () => 7;
 (x,y) => x + y;
 (num1,num2) => num1 * num2;

 (x,y) => {
     retrun x + y;
 }

 var myFunction = val => 7;
 ///only use if there is only one parram

 function returnFunc() {
     return () => 7;
 }
 array.filter(item) => item === 'john';

 ////// HIGH ORDER FUNCTIONS 

 function repeatMe(numTimes,cb){
     for (var i = 0; i<numTimes; i++){
        cb();
     }
    }
     function sayHello () {
         console.log('hello')
     }
     repeatMe(3,sayHello);

///////
var arr = [1,2,3]
var oneUp = array.map(function(num) {
    return num +1
})
oneUp;

function mapArray(array,callback){
    var arrayCopy = [] ;
    for (var i = 0; i <array.length; i++) {
        arrayCopy[i] = callback(array[i]);
    }
    return arrayCopy;
}





///////// FUNFUNFUNFUNCTION /////////////////


var names = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species'
})
console.log(name)
///****this is what this looks like in arrow function */

var names = animals.map((animal) => { return animal.name })
///also if it fits on one line, you can get rid of return //and curly braces
var names = animals.map((animal) => animal.name)
////
var names = animals.map((x) => x.name)

///////****this is same as using this for loop***/

var names = []
for (var i = 0; i < animal.length; i++) {
    names.push(animals[i].name)
}

console.log(names)

////////////////////////////////////
REDUCE

