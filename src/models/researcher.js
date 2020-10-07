/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var researcher = sequelize.define('researcher', {
      id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'id',
        primaryKey: true
      },
      affiliation: {
        type: DataTypes.STRING(8000),
        allowNull: true,
        field: 'affiliation'
      },
      citations: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'citations'
      },
      hindex: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'hindex'
      },
      index: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'index'
      },
      author: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        field: 'author'
      },
      number_of_papers: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'number_of_papers'
      },
      research_interests: {
        type: DataTypes.STRING(5500),
        allowNull: true,
        field: 'research_interests'
      },
      upi: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'upi'
      }
    }, {
      timestamps: false,
      tableName: 'researcher'
    });
    return researcher;
  };