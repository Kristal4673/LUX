const { Car } = require("../models");

const carData = [
    {
        year: 1997,
        make: 'toyota',
        model: 'camry',
        price: 1002.75,
        user_id: 1
    }
];

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;
