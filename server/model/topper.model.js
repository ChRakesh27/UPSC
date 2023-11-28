const mongoose = require("mongoose")

const Schema = mongoose.Schema

const topperSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    rank: { type: String, required: true },
    year: { type: String, required: true },
    gs_1_marks: { type: Number, required: true },
    gs_2_marks: { type: Number, required: true },
    gs_3_marks: { type: Number, required: true },
    gs_4_marks: { type: Number, required: true },
    essay_marks: { type: Number, required: true },
    prelims_score_gs: { type: Number, required: true },
    prelims_score_csat: { type: Number, required: true },
    optional_subject: { type: String, required: true },
    optional_1_marks: { type: Number, required: true },
    optional_2_marks: { type: Number, required: true },
    remarks: { type: String, required: true }
}, {
    versionKey: false
})

const topper = mongoose.model("topper", topperSchema);
module.exports = topper

