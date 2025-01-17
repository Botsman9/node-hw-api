const { users } = require('./data');
const bcrypt = require('bcryptjs');

const findByEmail = jest.fn(email => {
  const [user] = users.filter(el => String(el.email) === String(email));
  return user;
});

const findById = jest.fn(id => {
  const [user] = users.filter(el => String(el._id) === String(id));
  return user;
});

const create = jest.fn(({ name = 'Guest', email, password, sex = 'f' }) => {
  const pass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  const newUser = {
    email,
    password: pass,
    _id: '604780b0a33f593b5866d7ad',
    subscription: 'free',
    imgIdCloud: null,
    validPassword: function (pass) {
      return bcrypt.compareSync(pass, this.password);
    },
  };
  users.push(newUser);
  return newUser;
});

const updateToken = jest.fn((id, token) => {
  return {};
});

const updateAvatar = jest.fn((id, avatar, imgIdCloud) => {
  return {};
});

const findByToken = jest.fn(userToken => {
  const [user] = users.filter(el => String(el.token) === String(userToken));
  return user;
});

module.exports = {
  findByEmail,
  findById,
  create,
  updateToken,
  updateAvatar,
  findByToken,
};
