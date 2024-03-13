import express from 'express'
import {
  getUserProfileAndRepos,
  getLikes,
  likeProfile
} from '../controllers/user.controller.js'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js'

const router = express.Router()

router.get('/profile/:username', getUserProfileAndRepos)
router.post('/like/:username', ensureAuthenticated, likeProfile)
router.get('/likes', ensureAuthenticated, getLikes)

// router.get('/profile/:username', (req, res) => {
//   const { username } = req.params
//   console.log('username', username)
//   res.send('user profile is ready')
// })

export default router
// import express from "express";
// import { getLikes, getUserProfileAndRepos, likeProfile } from "../controllers/user.controller.js";
// import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

// const router = express.Router();

// router.get("/profile/:username", getUserProfileAndRepos);
// router.get("/likes", ensureAuthenticated, getLikes);
// router.post("/like/:username", ensureAuthenticated, likeProfile);

// export default router;
