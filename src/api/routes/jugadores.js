const {
  getJugadores,
  getJugadoresById,
  getJugadoresByAge,
  getJugadoresByPosition,
  postJugadores,
  putJugadores,
  deleteJugadores
} = require('../controllers/jugadores')

const jugadoresRouter = require('express').Router()

jugadoresRouter.get('/edad/:edad', getJugadoresByAge)
jugadoresRouter.get('/posicion/:posicion', getJugadoresByPosition)
jugadoresRouter.get('/:id', getJugadoresById)
jugadoresRouter.get('/', getJugadores)
jugadoresRouter.post('/', postJugadores)
jugadoresRouter.put('/:id', putJugadores)
jugadoresRouter.delete('/:id', deleteJugadores)

module.exports = jugadoresRouter
