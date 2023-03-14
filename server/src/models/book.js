'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    
    static associate(models) {
      
    }
  }
  book.init({
    title: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    is_archived: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};