const express = require("express")
const topics = require("../model/topic.model")
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const filter = {}
        if (req.query.id)
            filter['written'] = req.query.id

        const docs = await topics.find(filter);
        res.send(docs)
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


