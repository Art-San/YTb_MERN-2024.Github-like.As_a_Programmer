import passport from 'passport'
import dotenv from 'dotenv'
import { Strategy as GitHubStrategy } from 'passport-github2'
import User from '../models/user.model.js'

dotenv.config()

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  done(null, obj)
})

// Используйте GitHubStrategy в Passport.
// Стратегии в Passport требуют функции «verify», которая принимает
// учетные данные (в данном случае — accessToken, refreshToken и GitHub).
// профиль) и вызвать обратный вызов с объектом пользователя.

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: '/api/auth/github/callback'
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOne({ username: profile.username })
      console.log(1, 'user', user)
      // signup
      if (!user) {
        const newUser = new User({
          name: profile.displayName,
          username: profile.username,
          profileUrl: profile.profileUrl,
          avatarUrl: profile.photos[0].value,
          likedProfiles: [],
          likedBy: []
        })
        console.log(2, 'user', user)
        await newUser.save()
        done(null, newUser)
      } else {
        done(null, user)
      }
    }
  )
)
