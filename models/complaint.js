/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('complaint', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(complaint_id_seq::regclass)',
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'complaint',
    timestamps: false
  });
};
