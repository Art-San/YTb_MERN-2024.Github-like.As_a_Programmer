export async function ensureAuthenticated(req, res, next) {
  console.log(1, 'req.path', req.path)
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect(process.env.CLIENT_BASE_URL + '/login')
}
// http://localhost:3000/explore
// http://localhost:3000/likes
