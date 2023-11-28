const express = require("express")
const topics = require("../model/topic.model")
const topper = require("../model/topper.model")
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const topperDetails = await topper.find().select({ name: 1, rank: 1 }).exec()
        const docs = await topics.find();
        // res.send(docs)
    } catch (error) {
        res.send(error)
    }
})



router.get('/:id', async (req, res) => {
    try {
        const docs = await topics.findById(req.params.id)
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const data = req.body
        const docs = await topics.create(data)
        res.send(docs)
    } catch (err) {
        res.send(err)
    }
})





module.exports = router;


