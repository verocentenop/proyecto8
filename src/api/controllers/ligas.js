const Liga = require('../models/ligas')
const Club = require('../models/clubes')

const getligas = async (req, res, next) => {
  try {
    const ligas = await Liga.find().populate('clubes')
    return res.status(200).json(ligas)
  } catch (error) {
    return res.status(400).json('Solicitud fallida')
  }
}
const getLigasById = async (req, res, next) => {
  try {
    const { id } = req.params
    const ligas = await Liga.findById(id).populate('clubes')
    return res.status(200).json(ligas)
  } catch (error) {
    return res.status(400).json('Solicitud byid fallida')
  }
}
const getLigasByPais = async (req, res, next) => {
  try {
    const { pais } = req.params
    const ligas = await Liga.find({ pais: pais }).populate('clubes')
    return res.status(200).json(ligas)
  } catch (error) {
    return res.status(400).json('Solicitud bypais fallida')
  }
}
const getLigaByClubes = async (req, res, next) => {
  try {
    const { clubes } = req.params
    const club = await Club.findOne({ nombre: clubes })
    if (!club) {
      return res.status(404).json({ message: 'Club no encontrado' })
    }
    const ligas = await Liga.find({ clubes: club._id }).populate('clubes')
    return res.status(200).json(ligas)
  } catch (error) {
    return res.status(400).json('Solicitud byplayer fallida')
  }
}
const postLiga = async (req, res, next) => {
  try {
    const newLiga = new Liga(req.body)
    const ligaSaved = await newLiga.save()
    return res.status(201).json(ligaSaved)
  } catch (error) {
    return res.status(400).json('Solicitud post fallida')
  }
}
const putLiga = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldLiga = await Liga.findById(id)
    const newLiga = new Liga(req.body)
    newLiga._id = id
    newLiga.clubes = [...oldLiga.clubes, ...req.body.clubes]
    const ligaUpdated = await Liga.findByIdAndUpdate(id, newLiga, {
      new: true
    })
    return res.status(200).json(ligaUpdated)
  } catch (error) {
    return res.status(400).json('Solicitud put fallida')
  }
}
const deleteLiga = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteLiga = await Liga.findByIdAndDelete(id)
    return res.status(200).json(deleteLiga)
  } catch (error) {
    return res.status(400).json('Solicitud delete fallida')
  }
}
module.exports = {
  getligas,
  getLigasById,
  getLigasByPais,
  getLigaByClubes,
  postLiga,
  putLiga,
  deleteLiga
}
