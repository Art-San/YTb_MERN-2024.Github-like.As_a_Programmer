// export async function writePreviousPath(req, res, next) {
//   console.log(0, 'req.path', req.path)
//   if (!req.path.startsWith('/login') && !req.path.startsWith('/signup')) {
//     req.session.returnTo = req.path
//   }
//   next()
// }

/*TODO: буду использовать в ensureAuthenticated*/
// app.use((req, res, next) => {
//   // Проверяем, не является ли текущий URL страницей входа или выхода
//   if (!req.path.startsWith('/login') && !req.path.startsWith('/signup')) {
//     // Сохраняем URL текущей страницы в сессии
//     req.session.returnTo = req.path
//   }
//   next()
// })

/*TODO: буду использовать для переадресации на предыдущий роут*/
// app.get('/github/callback',
//  passport.authenticate('github', { failureRedirect: '/login' }),
//  function(req, res) {
//     // Успешная аутентификация, перенаправление на сохраненный URL-адрес или домой, если не установлено.
//     const redirectTo = req.session.returnTo || '/'
//     delete req.session.returnTo; // Очищаем сохраненный URL после использования
//     res.redirect(redirectTo);
//  })
