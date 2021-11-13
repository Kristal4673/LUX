const seedUsers = require("./user-seeds");
const seedCars = require("./car-seeds");
const seedReservations = require("./reservation-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedCars();
  console.log("\n----- CARS SEEDED -----\n");

  await seedReservations();
  console.log("\n----- RESERVATIONS SEEDED -----\n");

  process.exit(0);
};

seedAll();
