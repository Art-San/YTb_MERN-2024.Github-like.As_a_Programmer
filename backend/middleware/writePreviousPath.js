/*TODO: буду использовать в ensureAuthenticated*/
app.use((req, res, next) => {
  // Проверяем, не является ли текущий URL страницей входа или выхода
  if (!req.path.startsWith('/login') && !req.path.startsWith('/signup')) {
    // Сохраняем URL текущей страницы в сессии
    req.session.returnTo = req.path
  }
  next()
})
