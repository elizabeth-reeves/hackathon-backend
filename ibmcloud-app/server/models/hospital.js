'use strict';
module.exports = (sequelize, DataTypes) => {
  var Hospital = sequelize.define('Hospital', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    hospitalId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});
  return Hospital;
};