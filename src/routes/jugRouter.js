const express = require( 'express')
const jug = require( '../controllers/jugController.js')
const val = require( '../middlewares/index.js') //

const jugRouter = express.Router()

jugRouter.post('/jugs/create', val.validateJug, val.checkFeasibility, jug.createController)



module.exports = jugRouter;