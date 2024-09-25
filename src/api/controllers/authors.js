const { deleteFile } = require('../../utils/deleteFile')
const Author = require('../models/authors')
const Book = require('../models/books')

const getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate('books')
    return res.status(200).json(authors)
  } catch (error) {
    return res.status(400).json('Failed request')
  }
}
const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params
    const authors = await Author.findById(id).populate('books')
    return res.status(200).json(authors)
  } catch (error) {
    return res.status(400).json('Failed request - byId')
  }
}
const getAuthorsByCountry = async (req, res, next) => {
  try {
    const { country } = req.params
    const authors = await Author.find({ country: country }).populate('authors')
    return res.status(200).json(authors)
  } catch (error) {
    return res.status(400).json('Failed request - byCountry')
  }
}
const getAuthorByBooks = async (req, res, next) => {
  try {
    const { books } = req.params
    const book = await Book.findOne({ name: books })
    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }
    const authors = await Author.find({ books: book._id }).populate('books')
    return res.status(200).json(authors)
  } catch (error) {
    return res.status(400).json('Failed request - byBooks')
  }
}
const postAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body)
    if (req.file) {
      newAuthor.image = req.file.path
    }
    const authorSaved = await newAuthor.save()
    return res.status(201).json(authorSaved)
  } catch (error) {
    return res.status(400).json('Failed request - post')
  }
}
const putAuthor = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldAuthor = await Author.findById(id)
    const newAuthor = new Author(req.body)

    if (req.file) {
      newAuthor.image = req.file.path
      deleteFile(oldAuthor.image)
    }

    const updatedFields = { ...req.body }
    delete updatedFields.books

    const authorUpdated = await Author.findByIdAndUpdate(
      id,
      {
        $set: updatedFields,
        $addToSet: { books: { $each: req.body.books || [] } }
      },
      { new: true }
    )

    return res.status(200).json(authorUpdated)
  } catch (error) {
    return res.status(400).json({ message: 'Failed request - put' })
  }
}

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteAuthor = await Author.findByIdAndDelete(id)
    deleteFile(deleteAuthor.image)
    return res.status(200).json(deleteAuthor)
  } catch (error) {
    return res.status(400).json('Failed request - delete')
  }
}
module.exports = {
  getAuthors,
  getAuthorById,
  getAuthorsByCountry,
  getAuthorByBooks,
  postAuthor,
  putAuthor,
  deleteAuthor
}
