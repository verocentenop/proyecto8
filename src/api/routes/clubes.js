const {
  getClubes,
  getClubesById,
  getClubesByPais,
  getClubByJugadores,
  postClub,
  putClub,
  deleteClub
} = require('../controllers/clubes')

const clubesRouter = require('express').Router()

clubesRouter.get('/pais/:pais', getClubesByPais)
clubesRouter.get('/jugadores/:jugadores', getClubByJugadores)
clubesRouter.get('/:id', getClubesById)
clubesRouter.get('/', getClubes)
clubesRouter.post('/', postClub)
clubesRouter.put('/:id', putClub)
clubesRouter.delete('/:id', deleteClub)

module.exports = clubesRouter
