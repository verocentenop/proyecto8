const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        'Fantasía',
        'Novela',
        'No Ficción',
        'Biografia',
        'Poesia',
        'Autoayuda',
        'Literatura'
      ]
    }
  },
  { timestamps: true, collection: 'books' }
)
const Book = mongoose.model('books', bookSchema, 'books')
module.exports = Book
