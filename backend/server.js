import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'

import './passport/github.auth.js'

import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'
import authRoutes from './routes/auth.route.js'

import connectMongoDB from './db/connectMongoDB.js'

dotenv.config()
const app = express()

app.use(
  session({ secret: 'keyboard cat', resave: false, saveUninitialized: false })
)
// Инициализируем паспорт! Также используйте промежуточное ПО Passport.session() для поддержки
// постоянные сеансы входа в систему (рекомендуется)
app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 5000

// Здесь мы можем удалить cors, в продакшене это не обязательно,
// потому что фронтенд и бэкенд находятся в одном домене. Забыл упомянуть об этом в видео, извините.🙄
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is Ready')
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/explore', exploreRoutes)

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
  connectMongoDB()
})

// import express from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import passport from 'passport'
// import session from 'express-session'
// import path from 'path'

// import './passport/github.auth.js'

// import userRoutes from './routes/user.route.js'
// import exploreRoutes from './routes/explore.route.js'
// import authRoutes from './routes/auth.route.js'

// import connectMongoDB from './db/connectMongoDB.js'

// dotenv.config()

// const app = express()
// const PORT = process.env.PORT || 5000
// const __dirname = path.resolve()

// app.use(
//   session({ secret: 'keyboard cat', resave: false, saveUninitialized: false })
// )
// // Инициализируем паспорт! Также используйте промежуточное ПО Passport.session() для поддержки
// // постоянные сеансы входа в систему (рекомендуется)
// app.use(passport.initialize())
// app.use(passport.session())

// // Здесь мы можем удалить cors, в продакшене это не обязательно,
// // потому что фронтенд и бэкенд находятся в одном домене. Забыл упомянуть об этом в видео, извините.🙄
// // app.use(cors());

// app.use('/api/auth', authRoutes)
// app.use('/api/users', userRoutes)
// app.use('/api/explore', exploreRoutes)

// app.use(express.static(path.join(__dirname, '/frontend/dist')))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
// })

// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`)
//   connectMongoDB()
// })
