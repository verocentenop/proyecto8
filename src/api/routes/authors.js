const { isAdmin, isAuth } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')

const {
  getAuthors,
  getAuthorById,
  getAuthorsByCountry,
  getAuthorByBooks,
  postAuthor,
  putAuthor,
  deleteAuthor
} = require('../controllers/authors')

const authorsRouter = require('express').Router()

authorsRouter.get('/country/:country', getAuthorsByCountry)
authorsRouter.get('/books/:books', getAuthorByBooks)
authorsRouter.get('/:id', getAuthorById)
authorsRouter.get('/', getAuthors)
authorsRouter.post('/', [isAuth], upload.single('image'), postAuthor)
authorsRouter.put('/:id', [isAdmin], upload.single('image'), putAuthor)
authorsRouter.delete('/:id', [isAdmin], deleteAuthor)

module.exports = authorsRouter
