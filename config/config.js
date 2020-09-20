import Joi from 'joi';
//const Joi = require('joi');
// Require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// Define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['ci','dev', 'prod', 'test'])
    .default('dev'),
  PORT: Joi.number()
    .default(5000),
  RESEARCHEYE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('dev'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  RESEARCHEYE_HOST: Joi.string().required()
    .description('RESEARCHEYE host url'),
  RESEARCHEYE_PORT: Joi.number()
    .default(1833),
  RESEARCHEYE_DB: Joi.string().required()
    .description('RESEARCHEYE database'),
  RESEARCHEYE_USR: Joi.string().required()
    .description('RESEARCHEYE username'),
  RESEARCHEYE_PWD: Joi.string().required()
    .description('RESEARCHEYE password'),
  AUTH_TOKEN: Joi.string().required()
  .description('Auth Token'),
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
const { NODE_ENV, PORT, JWT_SECRET, RESEARCHEYE_HOST, RESEARCHEYE_PWD, RESEARCHEYE_PORT, RESEARCHEYE_DB, RESEARCHEYE_USR, AUTH_TOKEN } = envVars;
const config = {
  env: NODE_ENV.trim(),
  port: PORT,
  researcheye: {
    host: RESEARCHEYE_HOST.trim(),
    port: RESEARCHEYE_PORT,
    db: RESEARCHEYE_DB.trim(),
    user: RESEARCHEYE_USR.trim(),
    pwd: RESEARCHEYE_PWD.trim(),
    auth: AUTH_TOKEN.trim(),
  }
};

export default config;
