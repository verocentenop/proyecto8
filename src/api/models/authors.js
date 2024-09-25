const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    books: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'books',
        required: false
      }
    ]
  },
  { timestamps: true, collection: 'authors' }
)
const Author = mongoose.model('authors', authorSchema, 'authors')
module.exports = Author
