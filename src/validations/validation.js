const mongoose = require("mongoose")

const isPresent = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}

const isValidName = function (name) {
    const nameRegex = /^[a-zA-Z ]{2,30}$/
    return nameRegex.test(name)
}
const isValidTime = function (name) {
    const nameRegex = /^[a-zA-Z0-9]{2,30}$/
    return nameRegex.test(name)
}

const isValidPhone = function (phone) {
    var re = /^((\+91)?|91)?[6-9][0-9]{9}$/;
    return re.test(phone);
}

const isValidFile = (value) => {

    if (value.length == 0) {
        return "No file found";
    }

    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value[0].originalname)) {
        return "file must not contain Whitespaces.";
    }

    let regex = /^.*\.(jpg|JPG|gif|GIF|png|jpeg)$/
    if (!regex.test(value[0].originalname)) {
        return "Invalid file extension.";
    }
}

const isValidObjectId = function (id) {
    var ObjectId = mongoose.Types.ObjectId;
    return ObjectId.isValid(id)
}

module.exports = { isPresent, isValidFile, isValidName, isValidPhone, isValidObjectId,isValidTime };