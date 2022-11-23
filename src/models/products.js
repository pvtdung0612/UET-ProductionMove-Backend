"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.TEXT,
      bornDate: DataTypes.DATE,
      factoryID: DataTypes.INTEGER,
      hereRole: DataTypes.STRING,
      hereID: DataTypes.INTEGER,
      productLine: DataTypes.STRING,
      price: DataTypes.STRING,
      cpu: DataTypes.STRING,
      screen: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
