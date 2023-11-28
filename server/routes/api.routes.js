const topperRouter = require("../controller/topper.controller")
const topicRouter = require("../controller/topic.controller")
const express = require("express")

const router = express.Router()

router.use('/toppers', topperRouter)
router.use('/topics', topicRouter)

module.exports = router;