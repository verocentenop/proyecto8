const mongoose = require('mongoose')
const Model = require('../../api/models/models')
const models = require('../../data/models')

const sendSeed = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://proyecto7:RBtL6lBtUGzMfHXG@cluster0.i1rzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Model.collection.drop()

    await Model.insertMany(models)

    await mongoose.disconnect()
  } catch (error) {
    console.log('Error al lanzar seed')
  }
}
sendSeed()
