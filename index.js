require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const booksRouter = require('./src/api/routes/books')
const authorsRouter = require('./src/api/routes/authors')
const usersRouter = require('./src/api/routes/users')
const cloudinary = require('cloudinary').v2

const app = express()
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use(express.json())
connectDB()

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/authors', authorsRouter)
app.use('/api/v1/books', booksRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor operativo en: http://localhost:3000')
})
