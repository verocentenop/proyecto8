const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getModels,
  getModelById,
  getModelsByFuel,
  getModelsByYear,
  postModel,
  putModel,
  deleteModel
} = require('../controllers/models')

const modelsRouter = require('express').Router()
modelsRouter.get('/year/:year', getModelsByYear)
modelsRouter.get('/fuel/:fuel', getModelsByFuel)
modelsRouter.get('/:id', getModelById)
modelsRouter.get('/', getModels)
modelsRouter.post('/', [isAuth], postModel)
modelsRouter.put('/:id', [isAdmin], putModel)
modelsRouter.delete('/:id', [isAdmin], deleteModel)

module.exports = modelsRouter
