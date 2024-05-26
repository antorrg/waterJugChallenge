import express from 'express'
import jug from '../controllers/jugController.js'
import val from '../middlewares/index.js'

const jugRouter = express.Router()

jugRouter.post('/', val.validateJug, val.checkFeasibility, jug.createController)

jugRouter.get('/', jug.getSolutionController)

export default jugRouter;