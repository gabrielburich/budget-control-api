/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('card', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(card_id_seq::regclass)',
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
    tableName: 'card',
    timestamps: false
  });
};
