/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appraisal', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(appraisal_id_seq::regclass)',
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
