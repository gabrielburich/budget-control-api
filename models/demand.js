/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demand', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(demand_id_seq::regclass)',
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'store_id'
    },
    totalPrice: {
      type: DataTypes.REAL,
      allowNull: false,
      field: 'total_price'
    },
    emissionDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'emission_date'
    },
    freight: {
      type: DataTypes.REAL,
      allowNull: false
    },
    discount: {
      type: DataTypes.REAL,
      allowNull: false
    }
  }, {
    tableName: 'demand',
    timestamps: false
  });
};
