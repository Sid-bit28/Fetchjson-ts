const carMakers = ['Ford', 'Toyota', 'Audi'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camero']];

// help the inference when extracting values
const cars = carMakers[0];
const makers = carMakers.pop();

//Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types
const importantDates: (Date | string)[] = [new Date()];


