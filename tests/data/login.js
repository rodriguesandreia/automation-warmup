export const users = {
  validUser: {
    user: 'test',
    password: 'password123'
  },
  invalidUser: {
    user: 'andreia',
    password: 'password123'
  },
  wrongPassword: {
    user: 'test',
    password: 'password'
  },
  blockedAccount: {
    user: 'testblock',
    password: 'password123'
  }
};


export const messages = {
  loginSuccess: 'User successfully logged in!',
  blockedAccount: 'User blocked!',
  invalidUser: 'User not found!',
  wrongPassword: 'Incorrect username or password!',
  tempBlocked: 'User temporarily blocked!'
};