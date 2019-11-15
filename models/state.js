/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('state', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(state_id_seq::regclass)',
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
