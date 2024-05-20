const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// tuple -> determining the exact order of the types
const pepsi: [string, boolean, number] = ['brown', true, 40];

// this is known as type alias
type Drink = [string, boolean, number];
const cola: Drink = ['brown', false, 50];

// objects are more useful than tuple.
const carSpecs = {
  horsepower: 223,
  weight: 40000,
};
