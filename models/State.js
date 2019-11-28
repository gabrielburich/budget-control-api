/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('State', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    acronym: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'state',
    timestamps: false
  });
};
