/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Appraisal', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    demandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'demand_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    rating: {
      type: DataTypes.REAL,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'appraisal',
    timestamps: false
  });
};
