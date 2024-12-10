import React ,{ useEffect , useState} from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import stamp from '../assets/stamp.jpeg'
import axios from 'axios'
import { BarcodeScanner } from 'react-barcode-scanner'
import "react-barcode-scanner/polyfill"



const SelfDecleration = () => {

    const [user, setUser] = useState({})
    let navigate = useNavigate();

   let localUser = localStorage.getItem("id");
   console.log('localid',localUser)

   const getWcr = async() => {
       let res = await axios.get(`http://localhost:5000/api/user/${localUser}`)
       console.log("data" , res.data)
       setUser(res.data.data)
   }
 
   useEffect(() => {

       if(!localUser){
           Swal.fire({
               title: "Error!",
               text: 'Please fill up first WCR form',
               icon: "error"
           }).then(()=>{
               navigate('/Wcr')
           });
       }else{
           getWcr();
       }
   }, []);
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
    let submitHandler = async (e) =>{
        e.preventDefault();

        let response = await axios.put(`http://localhost:5000/api/selfdeclar/${localUser}`,user)
        
        if(response.data.success){

                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success"
                }).then(() => {
                    navigate('/ConnectionAggrement')
                })

            }else{
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
                        <h1 style={{color:"black",textDecoration:"underline",marginBottom:"30px"}}>Undertaking/Self- Declaration for Domestic Content Requirement fulfillment</h1>
                        <center><h4>(On a plain Paper)</h4></center>
                        <p><b>
                            1. This is to certify that M/S Mayur Pramod Dhokale has installed {user.total_capacity} KW [Capacity] Grid Connected Rooftop Solar Plant for {user.name} [Consumer Name] at {user.site_location} [Address] under application number {user.sanction_number} dated<input type="date" className='lines' required name='declaration_date' onChange={userhandler} />.[date of application] under <input type="text" name='discom' className='lines' required onChange={userhandler} />[DISCOM Name].
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
                                    <th><input type="text" name='pv_modules' onChange={userhandler} required /></th>
                                    <th> <div style={{ textAlign: "center", marginTop: "50px" }}>
                                    <h1>Barcode Scanner App</h1>
                                    <button
                                      onClick={() => setShowScanner((prev) => !prev)}
                                      style={{
                                        padding: "10px 20px",
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        marginBottom: "20px",
                                      }}
                                    >
                                      {showScanner ? "Stop Scanner" : "Start Scanner"}
                                    </button>
                              
                                    {showScanner && (
                                      <div
                                        style={{
                                          border: "1px solid black",
                                          width: "80%",
                                          height: "300px",
                                          margin: "0 auto",
                                        }}
                                      >
                                        <BarcodeScanner
                                          onDetected={(result) => handleScan(result.text)} // Detect barcode and call handleScan
                                        />
                                      </div>
                                    )}
                              
                                    {scannedCode && (
                                      <p>
                                        <strong>Scanned Code:</strong> {scannedCode}
                                      </p>
                                    )}
                                  </div>
                                      </th>
                                </tr>
                                <tr>
                                    <th>PV Module Make :</th>
                                    <th>{user.inverter_make}</th>
                                </tr>
                                <tr>
                                    <th>Cell manufacturer’s name</th>
                                    <th><input type="text" name='cell_name' onChange={userhandler} required /></th>
                                </tr>
                                <tr>
                                    <th>Cell GST invoice No</th>
                                    <th><input type="text" name='gst_number' required onChange={userhandler} /></th>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>3. The above undertaking is based on the certificate issued by PV Module manufacturer/supplier while supplying the above mentioned order.</b></p>

                        <p><b>4. I,<input type="text" className='lines' required />on behalf of M/S Mayur Pramod Dhokale [Company Name] further declare that the information given above is true and correct and nothing has been concealed therein. If anything is found incorrect at any stage, then REC/ MNRE may take any appropriate action against my company for wrong declaration. Supporting documents and proof of the above information will be provided as and when requested by MNRE.</b></p>
                        <br /><br /><br /><br />

                        <div style={{ float: 'right', marginRight: '50px' }}>
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
                        <div className='next'>
                  <center><button>Next Page</button></center> 
                  </div>
                    </div>
            </div>
        </form>
    </>
  )
}

export default SelfDecleration
