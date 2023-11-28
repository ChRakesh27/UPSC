const express = require("express")
const answers = require("../model/answers.model")
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const docs = await answers.find();
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})



router.get('/:id', async (req, res) => {
    try {
        const docs = await answers.findById(req.params.id)
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const data = req.body
        const docs = await answers.create(data)
        res.send(docs)
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;


