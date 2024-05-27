const express = require('express')
const jugRouter = require('./jugRouter.js')

const mainRouter = express.Router()

mainRouter.use('/api', jugRouter)


module.exports = mainRouter;