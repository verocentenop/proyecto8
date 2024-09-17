const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: String, required: true },
    fuel: {
      type: String,
      required: true,
      enum: ['Gasolina', 'Diesel', 'Hibrido', 'Electrico']
    }
  },
  { timestamps: true, collection: 'models' }
)
const Model = mongoose.model('models', modelSchema, 'models')
module.exports = Model
