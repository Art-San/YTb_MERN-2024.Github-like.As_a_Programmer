import express from 'express'
import passport from 'passport'
import {
  check,
  githubCallback,
  logout
} from '../controllers/auth.controller.js'

const router = express.Router()

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
)

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: process.env.CLIENT_BASE_URL + '/login'
  }),
  githubCallback
)

router.get('/check', check)

router.get('/logout', logout)

export default router
