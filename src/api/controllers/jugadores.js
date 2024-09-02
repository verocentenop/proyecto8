const Jugador = require('../models/jugadores')

const getJugadores = async (req, res, next) => {
  try {
    const jugadores = await Jugador.find()
    return res.status(200).json(jugadores)
  } catch (error) {
    return res.status(400).json('Solicitud fallida')
  }
}
const getJugadoresById = async (req, res, next) => {
  try {
    const { id } = req.params
    const jugadores = await Jugador.findById(id)
    return res.status(200).json(jugadores)
  } catch (error) {
    return res.status(400).json('Solicitud byid fallida')
  }
}
const getJugadoresByPosition = async (req, res, next) => {
  try {
    const { posicion } = req.params
    const jugadores = await Jugador.find({ posicion: posicion })
    return res.status(200).json(jugadores)
  } catch (error) {
    return res.status(400).json('Solicitud bypos fallida')
  }
}
const getJugadoresByAge = async (req, res, next) => {
  try {
    const { edad } = req.params
    const jugadores = await Jugador.find({ edad: { $lt: edad } })
    return res.status(200).json(jugadores)
  } catch (error) {
    return res.status(400).json('Solicitud byage fallida')
  }
}
const postJugadores = async (req, res, next) => {
  try {
    const newJugador = new Jugador(req.body)
    const jugadorSaved = await newJugador.save()
    return res.status(201).json(jugadorSaved)
  } catch (error) {
    return res.status(400).json('Solicitud post fallida')
  }
}
const putJugadores = async (req, res, next) => {
  try {
    const { id } = req.params
    const newJugador = new Jugador(req.body)
    newJugador._id = id
    const jugadorUpdated = await Jugador.findByIdAndUpdate(id, newJugador, {
      new: true
    })
    return res.status(200).json(jugadorUpdated)
  } catch (error) {
    return res.status(400).json('Solicitud put fallida')
  }
}
const deleteJugadores = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteJugadores = await Jugador.findByIdAndDelete(id)
    return res.status(200).json(deleteJugadores)
  } catch (error) {
    return res.status(400).json('Solicitud delete fallida')
  }
}
module.exports = {
  getJugadores,
  getJugadoresById,
  getJugadoresByPosition,
  getJugadoresByAge,
  postJugadores,
  putJugadores,
  deleteJugadores
}
