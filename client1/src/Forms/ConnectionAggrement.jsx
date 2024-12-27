import React , { useEffect , useState} from 'react'
import Swal from 'sweetalert2'
import { useLocation , useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import stamp from "../assets/stamp.png"

const ConnectionAggrement = () => {
    
    const [user, setUser] = useState({})
    let navigate = useNavigate();
    let params = useParams();

    let localUser = localStorage.getItem("id");
    console.log('localid',localUser)
 
    const getWcr = async() => {
        let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${localUser}`)
        console.log("data" , res.data)
        setUser(res.data.data)
    }
  
    const editData = async() => {
        let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${params.id}`)
        console.log("data" , res.data)
        setUser(res.data.data)
    }

    useEffect(() => {

        if(!params.id){

        if(!localUser){
            Swal.fire({
                title: "Error!",
                text: 'Please fill up first WCR form',
                icon: "error",
                customClass: {
                    confirmButton: 'custom-error-button' 
                }
            }).then(()=>{
                navigate('/Wcr')
            });
        }else{
            getWcr();
        }
    }else{
        editData();
    }
    }, []);

    useEffect(() => {
    }, [user])
    


    const userhandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    let submitHandler = async (e) =>{
        e.preventDefault();

       if(params.id){
        let response = await axios.put(`https://admin.samarthenergysolution.com/api/connection/${params.id}`,user)
        
        if(response.data.success){

                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success"
                }).then(() => {
                    navigate(`/views/${params.id}`)
                })

            }else{
                Swal.fire({
                    title: "Error!",
                    text: response.data.message,
                    icon: "error",
                    customClass: {
                        confirmButton: 'custom-error-button' 
                    }
                });
            }
       }
       else{
        let response = await axios.put(`https://admin.samarthenergysolution.com/api/connection/${localUser}`,user)
        
        if(response.data.success){

                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success"
                }).then(() => {
                    navigate('/ModelAgreement')
                })

            }else{
                Swal.fire({
                    title: "Error!",
                    text: response.data.message,
                    icon: "error",
                    customClass: {
                        confirmButton: 'custom-error-button' 
                    }
                });
            }
       }
    }



  return (
    <>
        <form onSubmit={submitHandler}>
            <div className="insideform">
            <div>
                        <h1 style={{color:"black",textDecoration:"underline"}}>
                            <center>Net Metering Connection Agreement</center>
                        </h1>
                        <p>
                            This Agreement is made and entered into at  {user.address}  on this {user.site_location} day of <input type="date" className='lines' required name='netmeter_date' value={user.netmeter_date} onChange={userhandler} /> between the Eligible Consumer {user.name} (NAME) having premises at {user.site_location} (ADDRESS) and Consumer No. {user.consumer_number}  As the first Party,
                     </p>

                        <p><b><center>AND</center></b></p>

                        <p>The Distribution Licensee- Maharashtra State Electricity Distribution Co. Ltd; and having its Registered Office at {user.disom_address} as second Party of this Agreement;</p>

                        <p>Whereas, the Eligible Consumer has applied to the Licensee for approval of a Net Metering Arrangement under the provisions of the Maharashtra Electricity Regulatory Commission (Net Metering for Roof-top Solar Photo Voltaic Systems) Regulations, 2015 ('the Net Metering Regulations') and sought its connectivity to the Licensee's Distribution Network ;</p>

                        <p>And whereas, the Licensee has agreed to provide Network connectivity to the Eligible Consumer for injection of electricity generated from its Roof-top Solar PV System of {user.total_capacity} kilowatt;<br />Both Parties hereby agree as follows:-</p>
                        <br />

                        <div>
                            <h3>1.&nbsp;&nbsp;&nbsp; Eligibility:</h3>
                            <p>
                                The Roof-top Solar PV System meets the applicable norms for being integrated into the Distribution Network, and that the Eligible Consumer shall maintain the System accordingly for the duration of this Agreement.
                            </p>
                        </div>
                        <br />

                        <div>
                            <h3>2.&nbsp;&nbsp;&nbsp; Technical and Inter-connection Requirements:</h3>
                            <p>
                                The metering arrangement and the inter-connection of the Roof-top Solar PV System with the Network of the Licensee shall be as per the provisions of the Net Metering Regulations and the technical standards and norms specified by the Central Electricity Authority for connectivity of distributed generation resources and for the installation and operation of meters.
                            </p>

                            <p>
                                The Eligible Consumer agrees, that he shall install, prior to connection of the Roof-top Solar PV System to the Network of the Licensee, an isolation device (both automatic and in built within inverter and external manual relays); and the
                            </p>

                            <p>Licensee shall have access to it if required for the repair and maintenance of the Distribution Network.</p>

                            <p>
                                The Licensee shall specify the interface/inter-connection point and metering point.
                            </p>

                            <p>
                                The Eligible Consumer shall furnish all relevant data, such as voltage, frequency, circuit breaker, isolator position in his System, as and when required by the Licensee.
                            </p>
                        </div>

                        <br />
                        <div>
                            <h3>3.&nbsp;&nbsp;&nbsp; Safety:</h3>
                            <p>
                                The equipment connected to the Licensee's Distribution System shall be compliant with relevant International (IEEE/IEC) or Indian Standards (BIS), as the case may be, and the installation of electrical equipment shall comply with the requirements specified by the Central Electricity Authority regarding safety and electricity supply.
                            </p>

                            <p>
                                The design, installation, maintenance and operation of the Roof-top Solar PV System shall be undertaken in a manner conducive to the safety of the Roof-top Solar PV System as well as the Licensee's Network.
                            </p>

                            <p>
                                If, at any time, the Licensee determines that the Eligible Consumer's Roof-top Solar PV System is causing or may cause damage to and/or results in the Licensee's other consumers or its assets, the Eligible Consumer shall disconnect the Roof-top Solar PV System from the distribution Network upon direction from the Licensee, and
                                Shall undertake corrective measures at his own expense prior to re-connection.
                            </p>

                            <p>
                                The Licensee shall not be responsible for any accident resulting in injury to human beings or animals or damage to property that may occur due to back- feeding from the Roof-top Solar PV System when the grid supply is off. The Licensee may disconnect the installation at any time in the event of such exigencies to prevent such accident.
                            </p>

                        </div>
                        <br />

                        <div>
                            <h3>4.&nbsp;&nbsp;&nbsp; Other Clearances and Approvals:</h3>
                            <p>
                                The Eligible Consumer shall obtain any statutory approvals and clearances that maybe required, such as from the Electrical Inspector or the municipal or other authorities, before connecting the Roof-top Solar PV System to the distribution Network.
                            </p>
                        </div>

                        <div>
                            <h3>5.&nbsp;&nbsp;&nbsp; Period of Agreement, and Termination:</h3>
                            <p>
                                This Agreement shall be for a period for 20 years, but may be terminated prematurely
                            </p>
                            <p>
                                (a) By mutual consent; or
                            </p>
                            <p>
                                (b) By the Eligible Consumer, by giving 30 days' notice to the Licensee ;
                            </p>
                            <p>
                                (c) By the Licensee, by giving 30 days' notice, if the Eligible Consumer breaches any terms of this Agreement or the provisions of the Net Metering Regulations and does not remedy such breach within 30 days, or such other reasonable period as may be provided, of receiving notice of such breach, or for any other valid reason communicated by the Licensee in writing.
                            </p>
                        </div>

                        <div>
                            <h3>6.&nbsp;&nbsp;&nbsp; Access and Disconnection:</h3>
                            <p>
                                The Eligible Consumer shall provide access to the Licensee to the metering equipment and disconnecting devices of Roof-top Solar PV System, both automatic and manual, by the Eligible Consumer.
                            </p>
                            <p>
                                If, in an emergent or outage situation, the Licensee cannot access the disconnecting devices of the Roof-top Solar PV System, both automatic and manual, it may disconnect power supply to the premises.
                            </p>
                            <p><br /><br />
                                6.3 Upon termination of this Agreement under Clause 5, the Eligible Consumer shall disconnect the Roof-top Solar PV System forthwith from the Network of the Licensee.
                            </p>

                        </div>

                        <div>
                            <h3>7.&nbsp;&nbsp;&nbsp; Liabilities:</h3>
                            <p>
                                The Parties shall indemnify each other for damages or adverse effects of either Party's negligence or misconduct during the installation of the Roof-top Solar PV System, connectivity with the distribution Network and operation of the System.
                            </p>
                            <p>
                                The Parties shall not be liable to each other for any loss of profits or revenues, business interruption losses, loss of contract or goodwill, or for indirect, consequential, incidental or special damages including, but not limited to, punitive or exemplary damages, whether any of these liabilities, losses or damages arise in contract, or otherwise.
                            </p>

                        </div>

                        <div>
                            <h3>8.&nbsp;&nbsp;&nbsp; Commercial Settlement:</h3>
                            <p>
                                The commercial settlements under this Agreement shall be in accordance with the Net Metering Regulations.
                            </p>
                            <p>
                                The Licensee shall not be liable to compensate the Eligible Consumer if his Rooftop Solar PV System is unable to inject surplus power generated into the Licensee's Network on account of failure of power supply in the grid/Network.
                            </p>

                            <p>
                                The existing metering System, if not in accordance with the Net Metering Regulations, shall be replaced by a bi-directional meter (whole current/CT operated) or a pair of meters (as per the definition of 'Net Meter' in the Regulations), and a separate generation meter may be provided to measure Solar power generation. The bi-directional meter (whole current/CT operated) or pair of meters shall be installed at the inter-connection point to the Licensee's Network for recording export and import of energy.
                            </p>

                            <p>
                                The uni-directional and bi-directional or pair of meters shall be fixed in separate meter boxes in the same proximity.
                            </p>

                            <p>
                                The Licensee shall issue monthly electricity bill for the net metered energy on the scheduled date of meter reading. If the exported energy exceeds the imported energy, the Licensee shall show the net energy exported as credited Units of electricity as specified in the Net Metering Regulations, 2015. If the exported energy is less than the imported energy, the Eligible Consumer shall pay the Distribution Licensee for the net energy imported at the prevailing tariff approved by the Commission for the consumer category to which he belongs.
                            </p>

                        </div>

                        <div>
                            <h3>9.&nbsp;&nbsp;&nbsp;Connection Costs</h3>
                            <p>
                                The Eligible Consumer shall bear all costs related to the setting up of the Roof-top Solar PV System, excluding the Net Metering Arrangement costs.
                            </p>
                        </div>

                        <div>
                            <h3>10.&nbsp;&nbsp;&nbsp;Dispute Resolution</h3>
                            <p>
                                Any dispute arising under this Agreement shall be resolved promptly, in good faith and in an equitable manner by both the Parties.
                            </p>
                            <p>
                                The Eligible Consumer shall have recourse to the concerned Consumer Grievance Redressal Forum constituted under the relevant Regulations in respect of any grievance regarding billing which has not been redressed by the Licensee.
                            </p>
                        </div>

                        <br /><br />

                        <div>
                            <p><b>
                                In the witness where of Mayur Pramod Dhokale for and on behalf of Eligible Consumer and Shri.<input type="text" className='lines' name='shri' value={user.shri} onChange={userhandler} required />for and on behalf of MSEDCL agree to this agreement.
                            </b></p>
                        </div>

                        <br />

                        <div className='inline-container'>
                            <div style={{ width: '50%' }}>
                                <div className='inline-container'>
                                    <label htmlFor="">Name:</label>
                                    <input type="text" className='lines' value={user.name}/>
                                </div>
                                <center>For Eligible Consumer</center>
                                <br /><br /><br />
                                <div>
                        <img src={stamp} alt="Stamp & Seal" style={{height:"200px",width:"300px"}} />
                      
                    </div>
                                <p>Witness 1(Samarth energy solution):</p>
                            </div>

                            <div style={{ width: '50%' }}>
                                <div className='inline-container'>
                                    <label htmlFor="">Shri:</label>
                                    <input type="text" className='lines' value={user.shri} />
                                </div>
                                <center>for and on behalf of MSEDCL</center>
                                <br /><br /><br />
                                <p>Witness 1:</p>
                            </div>

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

export default ConnectionAggrement
