const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reservation extends Model {}

Reservation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // starting_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    // ending_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    description: {
      type: DataTypes.STRING,
    },
    car_id: {
      type: DataTypes.STRING,
      references: {
        model: "car",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "reservation",
  }
);

module.exports = Reservation;
