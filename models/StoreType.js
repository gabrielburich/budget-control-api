/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StoreType', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'store_type',
    timestamps: false
  });
};
