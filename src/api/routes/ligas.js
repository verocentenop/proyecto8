const {
  getligas,
  getLigasById,
  getLigasByPais,
  getLigaByClubes,
  postLiga,
  putLiga,
  deleteLiga
} = require('../controllers/ligas')

const ligasRouter = require('express').Router()

ligasRouter.get('/pais/:pais', getLigasByPais)
ligasRouter.get('/clubes/:clubes', getLigaByClubes)
ligasRouter.get('/:id', getLigasById)
ligasRouter.get('/', getligas)
ligasRouter.post('/', postLiga)
ligasRouter.put('/:id', putLiga)
ligasRouter.delete('/:id', deleteLiga)

module.exports = ligasRouter
