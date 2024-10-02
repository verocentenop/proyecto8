const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      age: req.body.age,
      rol: 'user'
    })
    const duplicateUser = await User.findOne({ userName: req.body.userName })

    if (duplicateUser) {
      return res.status(400).json('username not avilable')
    }
    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })
    if (!user) {
      return res.status(400).json('Incorrect user or password')
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('Incorrect user or password')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putUser = async (req, res, next) => {
  try {
    const { id } = req.params
if (req.user._id.toString() !== id) {
      return res.status(400).json('You cannot modify other users')
    }
    
    const newUser = new User(req.body)
    newUser._id = id
    const userUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true
    })
    return res.status(200).json(userUpdated)
  } catch (error) {
    return res.status(400).json('Failed request - put')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    if (req.user.rol !== 'admin' && req.user._id.toString() !== id) {
      return res.status(403).json('You are not allowed to delete this user')
    }

    const userDeleted = await User.findByIdAndDelete(id)
    return res.status(200).json({
      mensaje: 'User deleted',
      userDeleted
    })
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { getUsers, register, login, putUser, deleteUser }
