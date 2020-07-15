'use strict';
module.exports = (sequelize, DataTypes) => {
  var Hospital = sequelize.define('Hospital', {
    name: DataTypes.String,
    address: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    hospitalId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});
  return Hospital;
};