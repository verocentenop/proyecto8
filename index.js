require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const jugadoresRouter = require('./src/api/routes/jugadores')
const clubesRouter = require('./src/api/routes/clubes')
const ligasRouter = require('./src/api/routes/ligas')

const app = express()

app.use(express.json())
connectDB()

app.use('/api/v1/ligas', ligasRouter)
app.use('/api/v1/clubes', clubesRouter)
app.use('/api/v1/jugadores', jugadoresRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor operativo en: http://localhost:3000')
})
