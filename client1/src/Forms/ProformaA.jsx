import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import stamp from '../assets/stamp.png'
import signature from '../assets/signature.png';


const ProformaA = () => {

    const [user, setUser] = useState({})
    let navigate = useNavigate();
    let params = useParams();

    let localUser = localStorage.getItem("id");
    console.log('localid', localUser)

    const getWcr = async () => {
        let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${localUser}`)
        console.log("data", res.data)
        setUser(res.data.data)
    }

    const editData = async () => {
        let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${localUser}`)
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
                navigate('/Wcr')
            });
        } else {
            getWcr();
        }
    }else{
        editData();
    }
    }, []);

    useEffect(() => {
    }, [user])
    


    const userhandler = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }


    let submitHandler = async (e) => {
        e.preventDefault();


        if(params.id){

            let response = await axios.put(`https://admin.samarthenergysolution.com/api/proformaA/${params.id}`, user)
            if (response.data.success) {
          
                      Swal.fire({
                          title: "Success!",
                          text: response.data.message,
                          icon: "success"
                      }).then(() => {
                          navigate(`/views/${params.id}`)
                      })
          
                  } else {
                      Swal.fire({
                          title: "Error!",
                          text: response.data.message,
                          icon: "error"
                      });
                  }
              

        }else{

        
        let response = await axios.put(`https://admin.samarthenergysolution.com/api/proformaA/${localUser}`, user)
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
                            <b>Certified that a Grid Connected SPV Power Plant of <input type="text" className='lines'   value={user.total_capacity} disabled /> KWp capacity has been installed at the site <input type="text" className='lines' name='site_loaction' value={user.site_location} /> District
                            <input type="text" className='lines' name='district' onChange={userhandler} value={user.district} required  /> of  which has been installed by M/S Mayur Pramod Dhokale on <input type="date" value={user.installation_date} name='installation_date' className='lines' disabled /> The system is as per BIS/MNRE specifications. The system has been checked for its performance and found in order for further commissioning.</b>
                        </p>

                        <div>
                            <label htmlFor="">Signature of the beneficiary</label>
                            <label htmlFor="imageUpload">Signature [Vendor]</label>
                            <img src={signature} alt="Example" style={{ width: '200px', height: '150px' }} />
                            <label htmlFor="">Signature of the agency with name, seal and date</label>
                           
                        <img src={stamp} alt="Example" style={{ width: '200px', height: '150px' }} />
                            </div>
       
                        <div>

                        </div>


                        <p> <b>The above RTS installation has been inspected by me for Pre-Commissioning Testing of Roof Top Solar Connection on dt                             <input type="date" className='lines' name='connection_date'  onChange={userhandler} value={user.connection_date} required  /> as per guidelines issued by the office of The Chief Engineer vide letter no 21653 on dt. 18.08.2022 and found in order for commissioning. </b></p>

                        <div style={{ marginTop: '80px',marginBottom:'30px' }}>
                            <h4>Signature of the MSEDCL Officer <br />Name, <br />Designation <br />Date and seal</h4>
                        </div>

                    </div>
                    {params.id ? 
                        <div className='next'>
                            <center><button>Update</button></center>
                        </div>
                              :
                            <div className='next'>
                              <center><button>Next Page</button></center>
                            </div>
                         }
                </div>
            </form>
        </>
    )
}

export default ProformaA
