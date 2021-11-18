const User = require("./User");
const Car = require("./Car");
const Reservation = require("./Reservation");

User.hasMany(Reservation, {
  foreignKey: "user_id",
});

Reservation.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Car, {
  foreignKey: "user_id",
});

Car.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Car, Reservation };
