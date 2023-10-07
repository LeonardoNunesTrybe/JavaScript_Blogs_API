const { User } = require('../models');
const { createToken } = require('../auth/validateJWT');

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

module.exports = {
  createUser,
};