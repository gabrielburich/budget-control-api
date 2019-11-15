/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phone', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(phone_id_seq::regclass)',
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'user_id',
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'phone',
    timestamps: false
  });
};
