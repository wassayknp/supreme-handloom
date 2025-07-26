const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@supremehandloom.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true,
  },
  {
    name: 'Customer User',
    email: 'customer@example.com',
    password: bcrypt.hashSync('customer123', 10),
  },
];

module.exports = users;
