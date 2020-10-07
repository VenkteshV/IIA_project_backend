/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var patent_classification = sequelize.define('patent_classification', {
      id: {
        type: DataTypes.STRING(30),
        allowNull: true,
        field: 'id',
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'title'
      }
    }, {
      timestamps: false,
      tableName: 'patent_classification'
    });
    return patent_classification;
  };