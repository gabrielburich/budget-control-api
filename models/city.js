/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(city_id_seq::regclass)',
      primaryKey: true
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'state_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'city',
    timestamps: false
  });
};
