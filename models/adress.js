/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adress', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(adress_id_seq::regclass)',
      primaryKey: true
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'state_id'
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'city_id'
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'adress',
    timestamps: false
  });
};
