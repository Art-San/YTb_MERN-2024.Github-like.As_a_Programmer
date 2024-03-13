import express from 'express'
import { explorePopularRepos } from '../controllers/explore.controller.js'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js'

const router = express.Router()

router.get('/repos/:language', ensureAuthenticated, explorePopularRepos)

export default router



// import express from 'express'
// import { explorePopularRepos } from '../controllers/explore.controller.js'

// const router = express.Router()

// router.get('/repos/:language', explorePopularRepos)

// export default router
