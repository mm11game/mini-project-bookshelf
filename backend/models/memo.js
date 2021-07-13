"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Memo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Memo.belongsTo(models.User, { foreignKey: "user_id" });
      Memo.belongsTo(models.Book, { foreignKey: "book_id" });
    }
  }
  Memo.init(
    {
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Memo",
    }
  );
  return Memo;
};
