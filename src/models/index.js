import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import config from '../../config/config';

const db = {};

// connect to RESEARCHEYE Database
const sequelize = new Sequelize(
  config.researcheye.db,
  config.researcheye.user,
  config.researcheye.pwd, {
    dialect: 'postgres',
    host: config.researcheye.host,
    port: config.researcheye.port
  }
);
//sequelize.sync();
const basename = path.basename(module.filename);
const modelsDir = path.normalize(`${__dirname}/../models`);

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(modelsDir)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  // import model files and save model names
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // sequelize.import(path.join(modelsDir, file));
    db[model.name] = model;
  });

// assign the sequelize variables to the db object and returning the db.
module.exports = _.extend({
  sequelize,
  Sequelize,
}, db);
