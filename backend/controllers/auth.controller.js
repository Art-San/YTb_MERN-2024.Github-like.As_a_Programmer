export const githubCallback = async (req, res) => {
  res.redirect(process.env.CLIENT_BASE_URL)
}

export const check = async (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ user: req.user })
  } else {
    res.send({ user: null })
  }
}

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    res.json({ message: 'Logged out' })
  })
}
