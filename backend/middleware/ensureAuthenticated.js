export async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect(process.env.CLIENT_BASE_URL + '/login')
}
// http://localhost:3000/explore
// http://localhost:3000/likes
