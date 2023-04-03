const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const timeLineSchema = new mongoose.Schema(
    {

        timeLineData: {
            userId: {
                type: ObjectId,
                required: true,
                trim: true,
                ref: "User"
            },
            date: {
                type: String,
                trim: true
            },
            inconclusive: {
                type: Boolean,
                trim: true,
                default: false
            },
            incomplete: {
                type: Boolean,
                trim: true,
                default: false
            },
            inTime: {
                type: String,
                trim: true,
                default: null
            },
            outTime: {
                type: String,
                trim: true,
                default: null
            },
            deductions: [
                {
                    inTime: {
                        type: String,
                        trim: true,
                        default: null
                    },
                    outTime: {
                        type: String,
                        trim: true,
                        default: null
                    },
                    deduction: {
                        type: String,
                        trim: true,
                        default: "0"
                    },
                    _id: false
                },
            ]
        },

        exemption: {
            type: String,
            trim: true,
            default: "0"
        },

        machineId: {
            type: String,
            required: true,
            trim: true
        },

        scanType: {
            type: String,
            enum: ["Finger Print", "Face Scan"],
            trim: true,
            default: "Finger Print"
        },

    }, { timestamps: true }
)

module.exports = mongoose.model("TimeLine", timeLineSchema)