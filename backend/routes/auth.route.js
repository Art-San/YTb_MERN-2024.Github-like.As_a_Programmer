import express from 'express'
import passport from 'passport'

const router = express.Router()

// router.get('/login', (req, res) => {
//   const resalt = req.isAuthenticated()
//   console.log(1, 'res', resalt)
//   res.send('You logger in')
// })

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
)

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: process.env.CLIENT_BASE_URL + '/login'
  }),
  function (req, res) {
    res.redirect(process.env.CLIENT_BASE_URL)
  }
)

/*TODO: буду использовать для переадресации на предыдущий роут*/
// app.get('/github/callback',
//  passport.authenticate('github', { failureRedirect: '/login' }),
//  function(req, res) {
//     // Успешная аутентификация, перенаправление на сохраненный URL-адрес или домой, если не установлено.
//     const redirectTo = req.session.returnTo || '/'
//     delete req.session.returnTo; // Очищаем сохраненный URL после использования
//     res.redirect(redirectTo);
//  })

router.get('/check', (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ user: req.user })
  } else {
    res.send({ user: null })
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.json({ message: 'Logged out' })
  })
})

export default router

// import express from 'express'
// import passport from 'passport'

// const router = express.Router()

// router.get(
//   '/github',
//   passport.authenticate('github', { scope: ['user:email'] })
// )

// router.get(
//   '/github/callback',
//   passport.authenticate('github', {
//     failureRedirect: process.env.CLIENT_BASE_URL + '/login'
//   }),
//   function (req, res) {
//     res.redirect(process.env.CLIENT_BASE_URL)
//   }
// )

// router.get('/check', (req, res) => {
//   if (req.isAuthenticated()) {
//     res.send({ user: req.user })
//   } else {
//     res.send({ user: null })
//   }
// })

// router.get('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     res.json({ message: 'Logged out' })
//   })
// })

// export default router
