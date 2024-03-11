import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoutes from './routes/user.route.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

// Здесь мы можем удалить cors, в продакшене это не обязательно,
// потому что фронтенд и бэкенд находятся в одном домене. Забыл упомянуть об этом в видео, извините.🙄
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is Ready')
})

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
