import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      email: Joi.string().email().required(),
      name: Joi.string().required()
    }
  },

  // UPDATE /api/users/:email
  updateUser: {
    body: {
      email: Joi.string().email(),
      name: Joi.string()
    },
    params: {
      email: Joi.string().email().required(),
    }
  },

  // GET /api/users/:email
  getUser: {
    params: {
      email: Joi.string().email().required(),
    }
  },

  // DELETE /api/users/:email
  deleteUser: {
    params: {
      email: Joi.string().email().required(),
    }
  }
};
