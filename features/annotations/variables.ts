let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'pink', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

//classes
class Cars {}

let cark: Cars = new Cars();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//If declaration and initialization is on the same line then typescript will predict what is the type of the variable.

//when to use annotations
// 1) Function that returns the 'any' type

const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable in one line and initialize it later in the code.

let words = ['red', 'green'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}

// 3) A variable whose type cannot be inferred correctly.
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
