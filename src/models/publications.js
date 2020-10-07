/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var publications = sequelize.define('publications', {
      author_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'author_id',
        primaryKey:true
        },
      titles: {
        type: DataTypes.STRING(3000),
        allowNull: true,
        field: 'titles'
      },
      citations_per_paper: {
        type: DataTypes.STRING(3000),
        allowNull: true,
        field: 'citations_per_paper'
      },
      abstracts: {
        type: DataTypes.STRING(100000),
        allowNull: true,
        field: 'abstracts'
      },
      venues: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        field: 'venues'
      },
      year: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'year'
      }
    }, {
      timestamps: false,
      tableName: 'publications'
    });
    return publications;
  };