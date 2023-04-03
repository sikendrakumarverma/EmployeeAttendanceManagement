const express = require("express");
const router = express.Router();

const { addEmployee, getEmployees, getEmployeesById } = require("../controllers/employeesController");
const { addTimeLine, getTimeLineData } = require("../controllers/timeLineController");
// const {  } = require("../controllers/totalTimeLineController");

//----------------------------------------Employees Api's-------------------------------------------------------//
router.post("/addEmployee", addEmployee);

router.get("/getEmployees", getEmployees)

router.get("/getEmployeeById/:userId", getEmployeesById);

//----------------------------------------TimeLine Api's--------------------------------------------------------//
router.post("/addTimeLine", addTimeLine);

router.get("/getTimeLineDataById/:userId", getTimeLineData);

//----------------------------------------totalTimeLine Api's---------------------------------------------------//



module.exports = router