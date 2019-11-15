/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(order_id_seq::regclass)',
      primaryKey: true
    },
    demandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'demand_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'product_id'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount: {
      type: DataTypes.REAL,
      allowNull: false
    }
  }, {
    tableName: 'order',
    timestamps: false
  });
};
