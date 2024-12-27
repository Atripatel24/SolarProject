import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import stamp from '../assets/stamp.png'
import axios from 'axios'
import { BarcodeScanner } from 'react-barcode-scanner'
import "react-barcode-scanner/polyfill"



const SelfDecleration = () => {

    const [user, setUser] = useState({})
    let navigate = useNavigate();
    let params = useParams();
    console.log(params.id)

    let localUser = localStorage.getItem("id");
    console.log('localid', localUser)


    const getWcr = async () => {
        let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${localUser}`)
        console.log("data", res.data)
        setUser(res.data.data)
    }

    const editWcr = async () => {
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
                navigate('/Wcr')
            });
            } else {
            getWcr();
            }
        }else{
            editWcr();
        }
    }, []);

    useEffect(()=>{
        console.log("user",user)
    },[user])

    const [showScanner, setShowScanner] = useState(false);
    const [scannedCode, setScannedCode] = useState("");

    // Callback to handle the scanned barcode
    const handleScan = (code) => {
        setScannedCode(code);
        alert(`Scanned Code: ${code}`);
        setShowScanner(false); // Hide scanner after scanning
    };


    const userhandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    let submitHandler = async (e) => {
        e.preventDefault();

        if(params.id){
            let response = await axios.put(`https://admin.samarthenergysolution.com/api/selfdeclar/${params.id}`, user)

            console.log('update',response.data.data)
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

            let response = await axios.put(`https://admin.samarthenergysolution.com/api/selfdeclar/${localUser}`, user)

            if (response.data.success) {
    
                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success"
                }).then(() => {
                    navigate('/ConnectionAggrement')
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
                    <h1 style={{ color: "black", textDecoration: "underline", marginBottom: "30px" }}>Undertaking/Self- Declaration for Domestic Content Requirement fulfillment</h1>
                    <center><h4>(On a plain Paper)</h4></center>
                    <p><b>
                        1. This is to certify that M/S Mayur Pramod Dhokale has installed {user.total_capacity} KW [Capacity] Grid Connected Rooftop Solar Plant for {user.name} [Consumer Name] at {user.site_location} [Address] under application number {user.sanction_number} dated<input type="date" className='lines' required name='declaration_date' value={user.declaration_date} onChange={userhandler} />.[date of application] under {user.discom_name}.
                    </b></p>

                    <p><b>
                        2. It is hereby undertaken that the PV modules installed for the above-mentioned project are domestically manufactured using domestic manufactured solar cells. The details of installed PV Modules are follows:
                    </b></p>

                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>PV Module Capacity :</th>
                                <th>{user.total_capacity}</th>
                            </tr>
                            <tr>
                                <th>Number of PV Modules :</th>
                                <th>{user.num_modules}</th>
                            </tr>
                            <tr>
                                <th>Sr No of PV Module :</th>
                                <th><input type="text" name='sr_pv_no' value={user.sr_pv_no} onChange={userhandler} /></th>
                               
                            </tr>
                            <tr>
                                <th>PV Module Make :</th>
                                <th>{user.inverter_make}</th>
                            </tr>
                            <tr>
                                <th>Cell manufacturer’s name</th>
                                <th><input type="text" name='cell_name' value={user.cell_name} onChange={userhandler} required /></th>
                            </tr>
                            <tr>
                                <th>Cell GST invoice No</th>
                                <th><input type="text" name='gst_number' value={user.gst_number} required onChange={userhandler} /></th>
                            </tr>
                        </tbody>
                    </table>

                    <p><b>3. The above undertaking is based on the certificate issued by PV Module manufacturer/supplier while supplying the above mentioned order.</b></p>

                    <p><b>4. I, M/S Mayur Pramod Dhokale  on behalf of Samarth Energy Solution further declare that the information given above is true and correct and nothing has been concealed therein. If anything is found incorrect at any stage, then REC/ MNRE may take any appropriate action against my company for wrong declaration. Supporting documents and proof of the above information will be provided as and when requested by MNRE.</b></p>
                    <br /><br /><br /><br />

                    <div >
                        <label >(Signature With official Seal)</label>
                        <img src={stamp} alt="Example" style={{ width: '200px', height: '150px' }} />
                        <div className='inline-container'>
                            <label htmlFor="">For M/S</label>&nbsp;
                        </div>
                        <div className='inline-container'>
                            <label htmlFor="">Name: Mayur Pramod Dhokale</label>&nbsp;

                        </div>
                        <div className='inline-container'>
                            <label htmlFor="">Designation:&nbsp;</label>&nbsp;

                        </div>
                        <div className='inline-container'>
                            <label htmlFor="">Phone:&nbsp;&nbsp;9923710317
                            </label>

                        </div>
                        <div className='inline-container'>
                            <label htmlFor="">Email:&nbsp;&nbsp;samarth.energy1137@gmail.com</label>&nbsp;

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

            </div>
        </form>
    </>
)

}

export default SelfDecleration
