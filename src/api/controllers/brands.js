const Brand = require('../models/brands')
const Model = require('../models/models')

const getBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find().populate('models')
    return res.status(200).json(brands)
  } catch (error) {
    return res.status(400).json('Failed request')
  }
}
const getBrandById = async (req, res, next) => {
  try {
    const { id } = req.params
    const brands = await Brand.findById(id).populate('models')
    return res.status(200).json(brands)
  } catch (error) {
    return res.status(400).json('Failed request - byId')
  }
}
const getBrandsByCountry = async (req, res, next) => {
  try {
    const { country } = req.params
    const brands = await Brand.find({ country: country }).populate('models')
    return res.status(200).json(brands)
  } catch (error) {
    return res.status(400).json('Failed request - byCountry')
  }
}
const getBrandByModels = async (req, res, next) => {
  try {
    const { models } = req.params
    const model = await Model.findOne({ name: models })
    if (!model) {
      return res.status(404).json({ message: 'Brand not found' })
    }
    const brands = await Brand.find({ models: models._id }).populate('models')
    return res.status(200).json(brands)
  } catch (error) {
    return res.status(400).json('Failed request - byModel')
  }
}
const postBrand = async (req, res, next) => {
  try {
    const newBrand = new Brand(req.body)
    const brandSaved = await newBrand.save()
    return res.status(201).json(brandSaved)
  } catch (error) {
    return res.status(400).json('Failed request - post')
  }
}
const putBrand = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldBrand = await Brand.findById(id)

    if (!oldBrand) {
      return res.status(404).json({ message: 'Brand not found' })
    }

    const updatedFields = { ...req.body }
    delete updatedFields.models

    const brandUpdated = await Brand.findByIdAndUpdate(
      id,
      { $addToSet: { models: { $each: req.body.models || [] } } },
      { new: true }
    )

    return res.status(200).json(brandUpdated)
  } catch (error) {
    return res.status(400).json({ message: 'Failed request - put' })
  }
}

const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteBrand = await Brand.findByIdAndDelete(id)
    return res.status(200).json(deleteBrand)
  } catch (error) {
    return res.status(400).json('Failed request - delete')
  }
}
module.exports = {
  getBrands,
  getBrandById,
  getBrandsByCountry,
  getBrandByModels,
  postBrand,
  putBrand,
  deleteBrand
}
