const mongoose = require('mongoose')

const ligasSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    pais: { type: String, required: true },
    clubes: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'clubes',
        required: false
      }
    ]
  },
  { timestamps: true, collection: 'ligas' }
)
const Liga = mongoose.model('ligas', ligasSchema, 'ligas')
module.exports = Liga
