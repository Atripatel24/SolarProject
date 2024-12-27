import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


const Annexure1 = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const params = useParams();

    let localUser = localStorage.getItem("id");
    console.log('localid', localUser)

    const getWcr = async () => {
        let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${localUser}`)
        console.log("data", res.data)
        setUser(res.data.data)
    }

    const editData = async () => {
        let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${params.id}`)
        console.log("data", res.data)
        setUser(res.data.data)
    }

    useEffect(() => {

        if(!params.id){

        if (!localUser) {
            Swal.fire({
                title: "Error!",
                text: 'Please fill up first WCR form',
                icon: "error",
                customClass: {
                    confirmButton: 'custom-error-button' 
                }
            }).then(() => {
                navigate('/wcr')
            });
        } else {
            getWcr();
        }

    }else{
        editData();
    }

    }, []);

    useEffect(()=>{
    },[user])

    const userhandler = (e) => {
        // console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user)
    }
    const handleKeyDown = (e) => {
        if (
            ["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key) ||
            (e.key === "Tab")
        ) {
            return;
        }
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    };

    let submitHandler = async (e) => {
        e.preventDefault();

        if(params.id){
            
        let response = await axios.put(`https://admin.samarthenergysolution.com/api/annexure/${params.id}`, user)

        if (response.data.success) {

            Swal.fire({
                title: "Success!",
                text: response.data.message,
                icon: "success"
            }).then(() => {
                    navigate(`/editProfomaA/${params.id}`)
                
            })

        } else {
            Swal.fire({
                title: "Error!",
                text: response.data.message,
                icon: "error"
            });
        }
        }
        else{

        let response = await axios.put(`https://admin.samarthenergysolution.com/api/annexure/${localUser}`, user)

        if (response.data.success) {

            Swal.fire({
                title: "Success!",
                text: response.data.message,
                icon: "success"
            }).then(() => {
                    navigate('/ProfomaA')
                }
            )

        } else {
            Swal.fire({
                title: "Error!",
                text: response.data.message,
                icon: "error"
            });
        }
         }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="insideform">
                    <div>
                        <h1 style={{ color: 'black' }}>
                            <center>Renewable Energy Generating System</center>
                        </h1><br />
                        <h3>
                            <center>Annexure-I</center>
                        </h3><br />
                        <h5>
                            <center>(Commissioning Report for RE System)</center>
                        </h5>
                    </div>

                    <div>
                        <table className='annexure'>
                            <tr>
                                <th>SNo.</th>
                                <th>Particulars</th>
                                <th style={{ paddingLeft: '70px' }}>As Commissioned</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Name of the Consumer</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.name}
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Consumer Number</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.consumer_number}
                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Mobile Number</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    <input type="text" name='mobile' value={user.mobile} onKeyDown={handleKeyDown} onChange={userhandler} />
                                </td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>E-mail</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    <input type="text" value={user.email} name='email'  onChange={userhandler} />
                                </td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Address of Installation</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.site_location}
                                </td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td>RE Arrangement Type</td>
                                <td style={{ paddingLeft: '70px' }}>Net Metering Arrangement</td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td>RE Source</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    Solar
                                </td>
                            </tr>
                            <tr>
                                <td>8.</td>
                                <td>Sanctioned Capacity(KW)</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.sanctioned_capacity}
                                </td>
                            </tr>
                            <tr>
                                <td>9.</td>
                                <td>Capacity Type</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    Rooftop
                                </td>
                            </tr>
                            <tr>
                                <td>10.</td>
                                <td>Project Model</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    Capex
                                </td>
                            </tr>
                            <tr>
                                <td>11.</td>
                                <td>RE installed Capacity(Rooftop)(KW)</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.num_modules * user.wattage_per_module}
                                </td>
                            </tr>
                            <tr>
                                <td>12.</td>
                                <td>RE installed Capacity(Rooftop + Ground)(KW)</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    N/A
                                </td>
                            </tr>
                            <tr>
                                <td>13.</td>
                                <td>RE installed Capacity(Ground)(KW)</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    N/A
                                </td>
                            </tr>
                            <tr>
                                <td>14.</td>
                                <td>Installation date</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    <input type="date" onChange={userhandler} name='installation_date' value={user.installation_date} />
                                </td>
                            </tr><tr>
                                <td>15.</td>
                                <td>SolarPV Details</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Inverter Capacity(KW)</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.inverter_capacity}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Inverter Make</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.inverter_make}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>No .of PV Modules</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.num_modules}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Module Capacity (KW)</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.total_capacity}
                                </td>
                            </tr>
                        </table>

                    </div>
                    <br /><br />
                    <div className='next'>
                        <center><button>Next Page</button></center>
                    </div>
                    <br />
                    <br />
                </div>
            </form>
        </>
    )
}

export default Annexure1
