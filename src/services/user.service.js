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
  const users = await User.findAll();

  return { status: 201, data: users };
};

const findById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) return { status: 404, data: { message: 'User does not exist' } };

  return { status: 200, data: user };
};

module.exports = {
  createUser,
  findAll,
  findById,
};