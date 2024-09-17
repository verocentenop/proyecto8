require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const modelsRouter = require('./src/api/routes/models')
const brandsRouter = require('./src/api/routes/brands')
const usersRouter = require('./src/api/routes/users')

const app = express()

app.use(express.json())
connectDB()

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/brands', brandsRouter)
app.use('/api/v1/models', modelsRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor operativo en: http://localhost:3000')
})
