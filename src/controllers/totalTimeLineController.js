const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const totalTimeLineSchema = new mongoose.Schema(
    {

        timeLineId: {
            type: ObjectId,
            required: true,
            ref: "TimeLine",
            trim: true
        },
        total_present: {
            type: String,
            trim: true
        },

        total_absent: {
            type: String,
            trim: true
        },

        total_exemption: {
            type: String,
            trim: true
        },
        total_deduction: {
            type: String,
            trim: true
        },

    }, { timestamps: true }
)

module.exports = mongoose.model("TotalTimeLine", totalTimeLineSchema)