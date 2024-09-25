const { deleteFile } = require('../../utils/deleteFile')
const Book = require('../models/books')

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find()
    return res.status(200).json(books)
  } catch (error) {
    return res.status(400).json('Failed request')
  }
}
const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params
    const books = await Book.findById(id)
    return res.status(200).json(books)
  } catch (error) {
    return res.status(400).json('Failed request - byId')
  }
}
const getBooksByCategory = async (req, res, next) => {
  try {
    const { category } = req.params
    const books = await Book.find({ category: category })
    return res.status(200).json(books)
  } catch (error) {
    return res.status(400).json('Failed request - byCat')
  }
}
const getBooksByYear = async (req, res, next) => {
  try {
    const { year } = req.params
    const books = await Book.find({ year: { $gte: year } })
    return res.status(200).json(books)
  } catch (error) {
    return res.status(400).json('Failed request - byYear')
  }
}
const postBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body)
    if (req.file) {
      newBook.image = req.file.path
    }
    const bookSaved = await newBook.save()
    return res.status(201).json(bookSaved)
  } catch (error) {
    return res.status(400).json('Failed request - post')
  }
}
const putBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const newBook = new Book(req.body)
    newBook._id = id

    if (req.file) {
      newBook.image = req.file.path

      const oldBook = await Book.findById(id)
      deleteFile(oldBook.image)
    }

    const bookUpdated = await Book.findByIdAndUpdate(id, newBook, {
      new: true
    })
    return res.status(200).json(bookUpdated)
  } catch (error) {
    return res.status(400).json('Failed request - put')
  }
}
const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteBook = await Book.findByIdAndDelete(id)
    deleteFile(deleteBook.image)

    return res.status(200).json(deleteBook)
  } catch (error) {
    return res.status(400).json('Failed request - delete')
  }
}
module.exports = {
  getBooks,
  getBookById,
  getBooksByCategory,
  getBooksByYear,
  postBook,
  putBook,
  deleteBook
}
