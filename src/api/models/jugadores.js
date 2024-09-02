const mongoose = require('mongoose')

const jugadorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    edad: { type: Number, required: true },
    posicion: {
      type: String,
      required: true,
      enum: ['DC', 'EI', 'ED', 'MC', 'MCD', 'MCO', 'LD', 'LI', 'DFC', 'POR']
    }
  },
  { timestamps: true, collection: 'jugadores' }
)
const Jugador = mongoose.model('jugadores', jugadorSchema, 'jugadores')
module.exports = Jugador
