const { Car } = require("../models");

const carData = [
  {
    year: 1997,
    make: "toyota",
    model: "camry",
    price: 1002.75,
    color: "black",
    license_plate: "TX6786",
    mileage: 56789,
    description: "Super super fast and reliable",
  },
  {
    year: 2003,
    make: "Lexus",
    model: "GL460",
    price: 300.0,
    color: "white",
    license_plate: "TX6765",
    mileage: 20000,
    description: "Big and luxurious",
  },
  {
    year: 2021,
    make: "BMW",
    model: "X5",
    price: 400.75,
    color: "black",
    license_plate: "TX5624",
    mileage: 13567,
    description: "Spacious and luxurius, beautiful moonroof",
  },
  {
    year: 2018,
    make: "Mercedes Benz",
    model: "C300",
    price: 300.75,
    color: "blue",
    license_plate: "TX6782",
    mileage: 56789,
    description: "Very fast and luxurious",
  },
  {
    year: 1997,
    make: "toyota",
    model: "camry",
    price: 1002.75,
    color: "black",
    license_plate: "TX6786",
    mileage: 56789,
    description: "Super super fast and reliable",
  },
];

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;
