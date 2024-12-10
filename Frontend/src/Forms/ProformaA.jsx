import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import stamp from '../assets/stamp.jpeg'

const ProformaA = () => {

    const [user, setUser] = useState({})
    let navigate = useNavigate();

    let localUser = localStorage.getItem("id");
    console.log('localid', localUser)

    const getWcr = async () => {
        let res = await axios.get(`http://localhost:5000/api/user/${localUser}`)
        console.log("data", res.data)
        setUser(res.data.data)
    }

    useEffect(() => {

        if (!localUser) {
            Swal.fire({
                title: "Error!",
                text: 'Please fill up first WCR form',
                icon: "error"
            }).then(() => {
                navigate('/SelfDecleration')
            });
        } else {
            getWcr();
        }
    }, []);




    const userhandler = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }


    let submitHandler = async (e) => {
        e.preventDefault();

        let response = await axios.put(`http://localhost:5000/api/proformaA/${localUser}`, user)

        if (response.data.success) {

            Swal.fire({
                title: "Success!",
                text: response.data.message,
                icon: "success"
            }).then(() => {
                navigate('/SelfDecleration')
            })

        } else {
            Swal.fire({
                title: "Error!",
                text: response.data.message,
                icon: "error"
            });
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="insideform">
                    <div>
                        <h1 style={{ color: "black", textDecoration: "underline" }}>
                            <center>Proforma-A</center>
                        </h1>
                        <h4>
                            <center>COMMISSIONING REPORT (PROVISIONAL) FOR GRID CONNECTED SOLAR</center>
                        </h4>
                        <h4>
                            <center>PHOTOVOLTAIC POWER PLANT (with Net-metering facility)</center>
                        </h4>

                        <p>
                            <b>Certified that a Grid Connected SPV Power Plant of <input type="text" className='lines' value={user.total_capacity} disabled /> KWp capacity has been installed at the site <input type="text" className='lines' value={user.site_location} /> District<input type="text" className='lines' name='district' required onChange={userhandler} /> of  which has been installed by M/S Mayur Pramod Dhokale on <input type="date" value={user.installation_date} className='lines' disabled /> The system is as per BIS/MNRE specifications. The system has been checked for its performance and found in order for further commissioning.</b>
                        </p>

                        <div>
                            <label htmlFor="">Signature of the beneficiary</label>
                            <input type="file" />
                            <label htmlFor="">Signature of the agency with name, seal and date</label>
                           
                        <img src={stamp} alt="Example" style={{ width: '200px', height: '150px' }} />
                            </div>
       
                        <div>

                        </div>


                        <p> <b>The above RTS installation has been inspected by me for Pre-Commissioning Testing of Roof Top Solar Connection on dt {user.connection_date} as per guidelines issued by the office of The Chief Engineer vide letter no 21653 on dt. 18.08.2022 and found in order for commissioning. </b></p>

                        <div style={{ marginTop: '80px',marginBottom:'30px' }}>
                            <h4>Signature of the MSEDCL Officer <br />Name, <br />Designation <br />Date and seal</h4>
                        </div>

                    </div>
                    <div className='next'>
                        <center><button>Next Page</button></center>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ProformaA
