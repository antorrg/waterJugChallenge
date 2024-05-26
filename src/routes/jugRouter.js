import express from 'express'
import jug from '../controllers/jugController.js'

const jugRouter = express.Router()

jugRouter.post('/', jug.createController)

jugRouter.get('/', jug.getSolutionController)

export default jugRouter;