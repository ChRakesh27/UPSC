const topperRouter = require("../controller/topper.controller")
const answerRouter = require("../controller/answer.controller")
const express = require("express")

const router = express.Router()

router.use('/toppers', topperRouter)
router.use('/answers', answerRouter)

module.exports = router;