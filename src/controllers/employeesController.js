const employeeModel = require("../models/employeeModel")
const { uploadFile } = require("../aws_connection/aws.js");
const { isPresent, isValidName, isValidPhone, isValidFile } = require("../validations/validation");

const addEmployee = async function (req, res) {
    try {
        let bodyData = req.body;
        let files = req.files
        console.log(files)
        let {  name, phone } = bodyData;
        let data = {};

        if (Object.keys(bodyData).length == 0) return res.status(400).send({ status: false, message: "Data is mandatory" })

        // ----->> name validation <<-----

        if (!isPresent(name)) return res.status(400).send({ status: false, message: "Please enter name" })
        if (!isValidName(name)) return res.status(400).send({ status: false, message: "Name should be in alphabets" })
        data.name = name;

        // ----->> phone validation <<-----
        if (!isPresent(phone)) { return res.status(400).send({ status: false, message: "Please provide the phone" }) }
        if (!isValidPhone(phone)) { return res.status(400).send({ status: false, message: "Please provide valid phone number" }) }
        let phoneCheck = await employeeModel.findOne({ phone: phone })
        if (phoneCheck) { return res.status(400).send({ status: false, message: "This phone is already registerd" }) }
        data.phone = phone;

        // ----->> profileImage validation <<-----

        let msgForFile = isValidFile(files)
        if(msgForFile){
                return res.status(400).send({ status: false, message: msgForFile });
        }
        let uploadedFileURL = await uploadFile(files[0]);
        data.profileImage = uploadedFileURL

        const createdData = await employeeModel.create(data)
        return res.status(201).send({ status: true, message: "success", data: createdData })

    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

const getEmployees = async function (req, res) {
    try {
       
        let employees = await employeeModel.find( );
        return res.status(200).send({ status: true, message: "All employees list", data: employees })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const getEmployeesById = async function (req, res) {
    try {
       let userId = req.params.userId;
       console.log(userId);
        let employee = await employeeModel.findById({_id: userId} );
        return res.status(200).send({ status: true, message: " Employees Details", data: employee });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = { addEmployee, getEmployees, getEmployeesById }
