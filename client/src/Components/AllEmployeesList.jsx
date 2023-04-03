import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from '@mui/material';
import {  useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { SERVER_URI } from '../config/keys';

function AllEmployeesData() {

    let [data, setData] = useState([]);

     let navigate = useNavigate();

    useEffect(() => {
        
        getBooksData()

    }, [])



    function getBooksData() {
        axios.get(`${SERVER_URI}/getEmployees`)
            .then((response) => {
                setData(response.data.data)
                console.log(response.data.data)
                // Swal.fire({
                //     // position: 'top-end',
                //     icon: 'success',
                //     title: response.data.message,
                //     showConfirmButton: false,
                //     showClass: {
                //       popup: 'animate__animated animate__fadeInDown'
                //     },
                //     hideClass: {
                //       popup: 'animate__animated animate__fadeOutUp'
                //     },
                //     timer: 2500
                //   })
            })
            .catch((error) => {
                console.log("error :", error.response.data.message)
                //alert(`Error: ${error.response.data.message}`)
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     showClass: {
                //         popup: 'animate__animated animate__fadeInDown'
                //     },
                //     hideClass: {
                //         popup: 'animate__animated animate__fadeOutUp'
                //     },
                //     text: error.response.data.message,
                //     timer: 2500
                    
                // })
                // navigate('/')
            })

    }

    function View(userData){
         navigate('/ViewEmployeeDetails',{ state: userData })
    }

    return (
        <div >
            <h1 > All Employees List</h1>
            <div className="col-sm-10 offset-sm-1" style={{ background: "skyblue" }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>Name</th>
                            <th>In</th>
                            <th>Out</th>
                            <th>View</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) =>
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td><Button onClick={()=>{View(item)}} style={{background:"#00FF00"}} variant="outline-success">punch-in</Button></td>
                                <td><Button onClick={()=>{View(item)}} style={{background:"#00FF00"}} variant="outline-success">punch-out</Button></td>
                                <td><Button onClick={()=>{View(item)}} style={{background:"#00BFFF"}} variant="outline-success">View</Button></td>
                              
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default AllEmployeesData;