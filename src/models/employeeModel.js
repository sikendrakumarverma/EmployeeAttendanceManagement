const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        profileImage: {
            type: String,
            required: true,
            trim: true
        },
    }, { timestamps: true }
)

module.exports = mongoose.model("Employee", employeeSchema)