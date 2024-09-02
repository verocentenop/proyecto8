const mongoose = require('mongoose')

const clubesSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    pais: { type: String, required: true },
    jugadores: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'jugadores',
        required: false
      }
    ]
  },
  { timestamps: true, collection: 'clubes' }
)
const Club = mongoose.model('clubes', clubesSchema, 'clubes')
module.exports = Club
