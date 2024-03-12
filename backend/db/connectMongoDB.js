import mongoose from 'mongoose'

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log('MONGODB подключено')
  } catch (error) {
    console.log('Error при подключение MongoDB: ', error.message)
  }
}
