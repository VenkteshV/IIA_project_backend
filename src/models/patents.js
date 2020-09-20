/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var patents = sequelize.define('patents', {
    country: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'country',
      primaryKey: true
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
    title_localized: {
      type: DataTypes.STRING(2),
      allowNull: true,
      field: 'title_localized'
    },
    count_of_patents: {
      type: DataTypes.INTEGER(17),
      allowNull: true,
      field: 'count_of_patents'
    },
    code: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'code'
    }
  }, {
    timestamps: false,
    tableName: 'patents'
  });
  return patents;
};
