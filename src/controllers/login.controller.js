const { loginService } = require('../services');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const result = await loginService.userLogin(email, password);

  if (result.status === 400) {
    return res.status(400).json({ message: result.message });
  }

  return res.status(200).json(result.data);
};

module.exports = {
  userLogin,
};