/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('City', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'state_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'city',
    timestamps: false
  });
};
