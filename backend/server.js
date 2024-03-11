import express from 'express'

import userRoutes from './routes/user.route.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('Server is Ready')
})
// app.get('api/users', (req, res) => {
//   res.send('Server is Ready')
// })

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
