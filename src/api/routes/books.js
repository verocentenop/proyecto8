const { isAuth, isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')

const {
  getBooks,
  getBookById,
  getBooksByCategory,
  getBooksByYear,
  postBook,
  putBook,
  deleteBook
} = require('../controllers/books')

const booksRouter = require('express').Router()
booksRouter.get('/year/:year', getBooksByYear)
booksRouter.get('/category/:category', getBooksByCategory)
booksRouter.get('/:id', getBookById)
booksRouter.get('/', getBooks)
booksRouter.post('/', [isAuth], upload.single('image'), postBook)
booksRouter.put('/:id', [isAdmin], upload.single('image'), putBook)
booksRouter.delete('/:id', [isAdmin], deleteBook)

module.exports = booksRouter
