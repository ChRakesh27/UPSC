const express = require("express")
const topper = require("../model/topper.model")
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const docs = await topper.create(data)
        res.send(docs)
    } catch (err) {
        res.send(err)
    }
})


router.get('/', async (req, res) => {
    try {
        const docs = await topper.find()
        res.send(docs)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router