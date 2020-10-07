/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var patents = sequelize.define('patents', {
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'author_id',
        primaryKey:true
      },
      code: {
        type: DataTypes.STRING(500),
        allowNull: true,
        field: 'code'
      },
      title_localized: {
        type: DataTypes.STRING(300),
        allowNull: true,
        field: 'title_localized'
      }
    }, {
      timestamps: false,
      tableName: 'patents'
    });
    return patents;
  };
  