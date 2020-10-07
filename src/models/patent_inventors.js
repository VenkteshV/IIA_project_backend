/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var patent_inventors = sequelize.define('patent_inventors', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'id',
      primaryKey: true
    },
    country: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'country'
    },
    affliation: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'affliation'
    },
    inventor: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'inventor'
    },
    count_of_patents: {
      type: DataTypes.INTEGER(17),
      allowNull: true,
      field: 'count_of_patents'
    }
  }, {
    timestamps: false,
    tableName: 'patent_inventors'
  });
  return patent_inventors;
};
