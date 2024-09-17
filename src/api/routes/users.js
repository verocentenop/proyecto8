const { isAdmin, isAuth } = require('../../middlewares/auth')
const {
  getUsers,
  register,
  login,
  deleteUser,
  putUser
} = require('../controllers/users')

const usersRouter = require('express').Router()

isAdmin

usersRouter.get('/', [isAdmin], getUsers)
usersRouter.post('/register', register)
usersRouter.post('/login', login)
usersRouter.put('/:id', [isAdmin], putUser)
usersRouter.delete('/:id', [isAuth], deleteUser)

module.exports = usersRouter
