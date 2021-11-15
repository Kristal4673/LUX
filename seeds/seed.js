const seedUsers = require("./user-seeds");
const seedCars = require("./car-seeds.json");
const seedReservations = require("./reservation-seeds");
const { Car } = require("../models");

const sequelize = require("../config/connection");

const seedAll = async () => {
  try{
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  const seededCars = await Car.bulkCreate(seedCars, {
    returning: true,
  });
  console.log("\n----- CARS SEEDED -----\n");

  await seedReservations();
  console.log("\n----- RESERVATIONS SEEDED -----\n");

  process.exit(0);
} catch(err){
  console.log(err);
}
};

seedAll();
