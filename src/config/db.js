const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conexión BBDD: ✅')
  } catch (error) {
    console.log('Conexión BBDD: ❌')
  }
}
module.exports = { connectDB }
