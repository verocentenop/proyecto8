const mongoose = require('mongoose')
const Book = require('../../api/models/books')
const books = require('../../data/books')

const sendSeed = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://verocentenop:IhdMO23TUaVBdI1e@cluster8.sv8vz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster8'
    )

    await Book.collection.drop()

    await Book.insertMany(books)

    await mongoose.disconnect()
  } catch (error) {
    console.log('Error al lanzar seed')
  }
}
sendSeed()
