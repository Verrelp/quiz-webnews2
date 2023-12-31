'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class news extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  news.init({
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
    isPublic: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'news',
  });
  return news;
};