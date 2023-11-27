const mongoose = require("mongoose")

const Schema = mongoose.Schema

const answerSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true },
    testCode: { type: String, required: true },
    number: { type: Number, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    images: { type: Array, required: true },
    written: { type: String, required: true },
    paper: { type: String, required: true },
    topicName: { type: String, required: true },
    subtopicName: { type: String, required: true }
}, {
    versionKey: false
})

const answers = mongoose.model("answers", answerSchema);
module.exports = answers


