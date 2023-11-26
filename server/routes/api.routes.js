const topperRouter = require("../controller/topper.controller")
const express = require("express")

const router = express.Router()

router.use('/topper', topperRouter)

module.exports = router;