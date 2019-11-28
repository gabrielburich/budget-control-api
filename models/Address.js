/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'state_id'
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'city_id'
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'address',
    timestamps: false
  });
};
