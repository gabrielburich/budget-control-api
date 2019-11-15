/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('store', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(store_id_seq::regclass)',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating : {
      type: DataTypes.REAL,
      allowNull: false
    },
    storeType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'store_type'
    }
  }, {
    tableName: 'store',
    timestamps: false
  });
};
