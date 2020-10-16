import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@bitvice.co.za',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Brandon',
    email: 'brandon@bitvice.co.za',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'john@bitvice.co.za',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
