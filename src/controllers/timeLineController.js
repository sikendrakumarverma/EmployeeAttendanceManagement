const timeLineModel = require("../models/timeLineModel")
// const { uploadFile } = require("../aws_connection/aws.js");
const { isPresent, isValidObjectId } = require("../validations/validation");

const addTimeLine = async function (req, res) {
    try {
        let bodyData = req.body;
        console.log(bodyData);
        let { userId, inTime, outTime, deduction, exemption, scanType } = bodyData;
        let data = {};

        var objToday = new Date(),
            weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
            dayOfWeek = weekday[objToday.getDay()],
            // domEnder = function () { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
            // dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
            // months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
            // curMonth = months[objToday.getMonth()],
            // curYear = objToday.getFullYear(),
            curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
            curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
            // curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
            curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

        var dd = String(objToday.getDate()).padStart(2, '0');
        var mm = String(objToday.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = objToday.getFullYear();

        let dayMonthYearFormatDate = dd + '/' + mm + '/' + yyyy;

        // var today=curHour+":"+curMinute+"."+curSeconds+curMeridiem+" "+dayOfWeek+" "+dayOfMonth+"of"+curMonth+","+curYear;

         //console.log(objToday, dayMonthYearFormatDate)

        let isPresentToday = await timeLineModel.findOne({ date: dayMonthYearFormatDate });
        if (isPresentToday) {
            if (inTime) {
                // data.inTime = curHour + ":" + curMinute + curMeridiem;

                let obj = {
                    inTime : curHour + ":" + curMinute + curMeridiem,
                    outTime: null,
                }
                if (deduction) {
                    obj.deduction = deduction;
                } else {
                    obj.deduction = null;
                }
                let prevData = isPresentToday.deductions;
                prevData.push(obj);
                data.deductions = prevData;

            } else {
                let obj = {
                    outTime : curHour + ":" + curMinute + curMeridiem,
                    //inTime: null,
                }
                // if (deduction) {
                //     obj.deduction = deduction
                // } else {
                //     obj.deduction = null;
                // }
                let prevData = isPresentToday.deductions;
                prevData.push(obj);
                data.deductions = prevData;
            }
            const createdData = await timeLineModel.findOneAndUpdate({ date: dayMonthYearFormatDate }, data);
            if (inTime) {
                return res.status(201).send({ status: true, message: "Punched-in Successfull", data: createdData });
            } else {
                return res.status(201).send({ status: true, message: "Punched-out Successfull", data: createdData });
            }

        }
        if (Object.keys(bodyData).length == 0) return res.status(400).send({ status: false, message: "Data is mandatory" })

        // ----->> userId validation <<-----

        if (!isPresent(userId)) return res.status(400).send({ status: false, message: "Please enter userId" })
        if (!isValidObjectId(userId)) return res.status(400).send({ status: false, message: "Invalid userId" })
        data.userId = userId;

        const uniqueId =  Math.random().toString(36);
        // console.log(uniqueId);

        // ----->> machineId validation <<-----
        // if (!isPresent(machineId)) { return res.status(400).send({ status: false, message: "Please provide the machineId" }) }
        data.machineId = uniqueId;

        // if (inTime) {
        //     data.inTime = curHour + ":" + curMinute + curMeridiem;
        //     data.deductions.inTime = curHour + ":" + curMinute + curMeridiem;
        // };
        if (inTime) {
            data.inTime = inTime;
            data.deductions = inTime;
        };
        if (outTime) {
            data.outTime = curHour + ":" + curMinute + curMeridiem;
            data.deductions.outTime = curHour + ":" + curMinute + curMeridiem;
        };
        if (deduction) data.deductions.deduction = deduction;
        if (exemption) data.exemption = exemption;
        if (scanType) data.scanType = scanType;

        const createdData = await timeLineModel.create(data);

        if (inTime) {
            return res.status(201).send({ status: true, message: "Punched-in Successfull", data: createdData });
        } else {
            return res.status(201).send({ status: true, message: "Punched-out Successfull", data: createdData });
        }
    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

const getTimeLineData = async function (req, res) {
    try {

        let userId= req.params.userId
        let timeLineData = await timeLineModel.findById({userId: userId});
        return res.status(200).send({ status: true, message: "TimeLine Details", data: timeLineData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { addTimeLine, getTimeLineData }
