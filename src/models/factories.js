"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Factories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Factories.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Factories",
    }
  );
  return Factories;
};
