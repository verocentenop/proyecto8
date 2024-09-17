const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    models: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'models',
        required: false
      }
    ]
  },
  { timestamps: true, collection: 'brands' }
)
const Brand = mongoose.model('brands', brandSchema, 'brands')
module.exports = Brand
