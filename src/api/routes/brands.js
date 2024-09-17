const { isAdmin, isAuth } = require('../../middlewares/auth')
const {
  getBrands,
  getBrandById,
  getBrandsByCountry,
  getBrandByModels,
  postBrand,
  putBrand,
  deleteBrand
} = require('../controllers/brands')

const brandsRouter = require('express').Router()

brandsRouter.get('/country/:country', getBrandsByCountry)
brandsRouter.get('/models/:models', getBrandByModels)
brandsRouter.get('/:id', getBrandById)
brandsRouter.get('/', getBrands)
brandsRouter.post('/', [isAuth], postBrand)
brandsRouter.put('/:id', [isAdmin], putBrand)
brandsRouter.delete('/:id', [isAdmin], deleteBrand)

module.exports = brandsRouter
