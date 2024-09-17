const Model = require('../models/models')

const getModels = async (req, res, next) => {
  try {
    const models = await Model.find()
    return res.status(200).json(models)
  } catch (error) {
    return res.status(400).json('Failed request')
  }
}
const getModelById = async (req, res, next) => {
  try {
    const { id } = req.params
    const models = await Model.findById(id)
    return res.status(200).json(models)
  } catch (error) {
    return res.status(400).json('Failed request - byId')
  }
}
const getModelsByFuel = async (req, res, next) => {
  try {
    const { fuel } = req.params
    const models = await Model.find({ fuel: fuel })
    return res.status(200).json(models)
  } catch (error) {
    return res.status(400).json('Failed request - byFuel')
  }
}
const getModelsByYear = async (req, res, next) => {
  try {
    const { year } = req.params
    const models = await Model.find({ year: { $gt: year } })
    return res.status(200).json(models)
  } catch (error) {
    return res.status(400).json('Failed request - byYear')
  }
}
const postModel = async (req, res, next) => {
  try {
    const newModel = new Model(req.body)
    const modelSaved = await newModel.save()
    return res.status(201).json(modelSaved)
  } catch (error) {
    return res.status(400).json('Failed request - post')
  }
}
const putModel = async (req, res, next) => {
  try {
    const { id } = req.params
    const newModel = new Model(req.body)
    newModel._id = id
    const modelUpdated = await Model.findByIdAndUpdate(id, newModel, {
      new: true
    })
    return res.status(200).json(modelUpdated)
  } catch (error) {
    return res.status(400).json('Failed request - put')
  }
}
const deleteModel = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteModel = await Model.findByIdAndDelete(id)
    return res.status(200).json(deleteModel)
  } catch (error) {
    return res.status(400).json('Failed request - delete')
  }
}
module.exports = {
  getModels,
  getModelById,
  getModelsByFuel,
  getModelsByYear,
  postModel,
  putModel,
  deleteModel
}
