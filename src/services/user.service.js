const { User } = require('../models');
const { createToken } = require('../auth/jwt');

const createUser = async ({ displayName, email, password, image }) => {
  const emailExists = await User.findOne({
    where: { email },
  });

  if (emailExists) {
    return {
      status: 'CONFLICT',
      data: { message: 'User already registered' },
    };
  }
  const user = await User.create({ displayName, email, password, image });

  const token = createToken({ data: user });
  return {
    status: 'CREATED',
    data: { token },
  };
};

const findAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return { 
    status: 'SUCCESSFUL', 
    data: users,  
  };
};

const findById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

  return { 
    status: 'SUCCESSFUL', 
    data: user, 
  };
};

module.exports = {
  createUser,
  findAll,
  findById,
};