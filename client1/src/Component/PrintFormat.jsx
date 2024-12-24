import React, { useState, useRef, useEffect } from 'react'
import signature from '../assets/signature.png';
import stamp from '../assets/stamp.png';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const PrintFormat = () => {

    const [user, setUser] = useState([])
    const formRef = useRef();

    const data = useLocation();
    const userId = data.state
    console.log('userid', userId)

    const handlePrint = () => {
        const printContents = formRef.current.innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };

    let getData = async () => {
        let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${userId}`)
        console.log("data", res.data)
        setUser(res.data.data)
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <div className='print'  id='printPage'
            ref={formRef}>
            <div className='page-break'>
                <div className="insideform">
                    <h3>
                        <center>Work Completion Report for Solar Power Plant</center>
                    </h3>
                    <br />

                    <table className='user-table'>
                        <tr>
                            <th>Sr.No</th>
                            <th>Component</th>
                            <th>Observation</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Consumer number</td>
                            <td>{user.consumer_number}</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Site/Location With Complete Address</td>
                            <td>{user.site_location}</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Category: Govt/Private Sector</td>
                            <td>{user.category}</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Sanction number</td>
                            <td>{user.sanction_number}</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>6.</td>
                            <td>Sanctioned Capacity of solar PV system (KW) Installed</td>
                            <td>{user.sanctioned_capacity}</td>
                        </tr>
                        <tr>
                            <td>Capacity of solar PV system (KW)</td>
                            <td>{user.installed_capacity}</td>
                        </tr>
                        <tr>
                            <td rowSpan={7}>7.</td>
                            <td colSpan={2}><b>
                                <center>Specification of the Modules</center>
                            </b></td>
                        </tr>
                        <tr>
                            <td>Make of Module</td>
                            <td>{user.module_make}</td>
                        </tr>
                        <tr>
                            <td>ALMM Model Number</td>
                            <td>{user.almm_model}</td>
                        </tr>
                        <tr>
                            <td>Wattage per module</td>
                            <td>{user.wattage_per_module}</td>
                        </tr>
                        <tr>
                            <td>No. of Module</td>
                            <td>{user.num_modules}</td>
                        </tr>
                        <tr>
                            <td>Total Capacity (KWP)</td>
                            <td>{user.total_capacity}</td>
                        </tr>
                        <tr>
                            <td>Warrantee Details (Product + Performance)</td>
                            <td>{user.warranty_details}</td>
                        </tr>

                        <tr>
                            <td rowSpan={7}>8.</td>
                            <td colSpan={2}><b>
                                <center>PCU</center>
                            </b></td>
                        </tr>
                        <tr>
                            <td>Make & Model number of Inverter</td>
                            <td>{user.inverter_make}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{user.rating}</td>
                        </tr>
                        <tr>
                            <td>Type of charge controller/ MPPT</td>
                            <td>Rooftop</td>
                        </tr>
                        <tr>
                            <td>Capacity of Inverter</td>
                            <td>{user.inverter_capacity}</td>
                        </tr>
                        <tr>
                            <td>HPD</td>
                            <td>{user.hpd}</td>
                        </tr>
                        <tr>
                            <td>Year of manufacturing</td>
                            <td>{user.manufacturing_year}</td>
                        </tr>

                        <tr>
                            <td rowSpan={4}> 9.</td>
                            <td colSpan={2}><center>Earthing and Protections</center></td>
                        </tr>
                        <tr>
                            <td>No of Separate Earthings with earth Resistance</td>
                            <td>{user.earthings}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>It is certified that the Earth Resistance measure in presence of Licensed Electrical Contractor/Supervisor and found in order i.e. &lt; 5 Ohms as per MNRE OM Dtd. 07.06.24 for CFA Component.</td>
                        </tr>
                        <tr>
                            <td>Lightening Arrester</td>
                            <td>{user.lightning_arrester}</td>
                        </tr>

                    </table>
                    <br /><br /><br />
                    <p>
                        <b>
                            We Mayur Pramod Dhokale[Vendor]&{user.name}
                            bearing Consumer Number {user.consumer_number}  Ensured structural stability of
                            installed solar power plant and obtained requisite permissions from the concerned authority. If in
                            future, by virtue of any means due to collapsing or damage to installed solar power plant, MSEDCL
                            will not be held responsible for any loss to property or human life, if any. This is to Certified
                            above Installed Solar PV System is working properly with electrical safety & Islanding switch in
                            case of any presence of backup inverter an arrangement should be made in such way the backup
                            inverter supply should never be synchronized with solar inverter to avoid any electrical accident
                            due to back feeding. We will be held responsible for non-working of islanding mechanism and back
                            feed to the de-energized grid.</b>
                    </p>

                    <div>
                        <label htmlFor="imageUpload">Signature [Vendor]</label>

                        <img
                            src={`https://admin.samarthenergysolution.com${user.signature}`}
                            alt="Signature"
                            style={{ marginleft:'300px',width: '200px', height: '150px' }}
                        />

                    </div>

                    </div>

<div class="page-break">
                    <div style={{ color: 'black', margin: '10px' }}>
                        <h3>
                            <p>Guarantee Certificate Undertaking to be submitted by VENDOR</p></h3>
                    </div>
                    <p style={{ margin: "10px" }}>
                        The undersigned will provide the services to the consumers for repairs/maintenance of the RTS plant
                        free of cost for 5 years of the comprehensive Maintenance Contract (CMC) period from the date of
                        commissioning of the plant. Non performing/under-performing system component will be
                        replaced/repaired free of cost in the CMC period
                    </p>

                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ width: '50%', float: 'left' }}>
                            <label htmlFor="imageUpload">Signature [Vendor]</label>
                            <img src={signature} alt="Example" style={{ width: '200px', height: '150px' }} />
                        </div>
                        <div style={{ float: 'right', width: '50%' }}>
                            <label>Stamp & Seal</label>
                            <img src={stamp} alt="Example" style={{ width: '200px', height: '150px' }} />
                        </div>

                    </div>

                    <div>
                        <h3 style={{ marginTop: '40px' }}>Identity Details of Consumer :-</h3><br />
                        <div className='inline-container'>
                            <label htmlFor="">Aadhar Number :</label>
                            {user.aadhar_number}
                        </div>
                    </div>
                    <div>
                    <label htmlFor="aadharImage">Aadhar Card</label>

                    <img
                        src={`https://admin.samarthenergysolution.com${user.aadharImage}`}
                        alt="aadharimage"
                        style={{ width: '400px', height: '250px' }}
                    />

                </div>

</div>
     <div className='page-break'>             
<div>
                        <h1 style={{ color: 'black', margin: "10px" ,textDecoration:"underline"}}>
                            <center>Renewable Energy Generating System</center>
                        </h1>
                        <h3>
                            <center>Annexure-I</center>
                        </h3>
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
                            </tr><br />
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
                                    {user.mobile}
                                </td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>E-mail</td>
                                <td style={{ paddingLeft: '70px' }}>
                                    {user.email}
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
                                    {user.total_capacity}
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
                                    {user.installation_date}
                                </td>
                            </tr><tr>
                                <td>15.</td>
                                <td><b>SolarPV Details</b></td>
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
                    <br />
                    </div>
                    <div className='page-break'>
                        <h3 style={{ margin: "20px", color: "black" }}>
                            <center>Proforma-A</center>
                        </h3>
                        <h3 style={{ margin: "20px", color: "black" }}>
                            <center>COMMISSIONING REPORT (PROVISIONAL) FOR GRID CONNECTED SOLAR</center>
                        </h3>
                        <h3 style={{ margin: "20px", color: "black" }}>
                            <center>PHOTOVOLTAIC POWER PLANT (with Net-metering facility)</center>
                        </h3>

                        <p>
                            <b>Certified that a Grid Connected SPV Power Plant of   {user.total_capacity}  KWp capacity has been installed at the site{user.site_location}  District<input type="text" className='lines' required /> of MAHARASHTRA which has been installed by M/S <input type="text" className='lines' required /> on {user.installation_date}  The system is as per BIS/MNRE specifications. The system has been checked for its performance and found in order for further commissioning.</b>
                        </p>

                        <div>
                            <label htmlFor="">Signature of the beneficiary</label>

                         
                        </div>
                        <div>
                            <label htmlFor="">Signature of the agency with name, seal and date</label>
                            <div style={{ width: '50%' }}>
                            <label>Stamp & Seal</label>
                            <img src={stamp} alt="Example" style={{ width: '200px', height: '150px' }} />
                        </div>
                        </div>


                        <p> <b>The above RTS installation has been inspected by me for Pre-Commissioning Testing of Roof Top Solar Connection on dt &nbsp; {user.connection_date} &nbsp; as per guidelines issued by the office of The Chief Engineer vide letter no 21653 on dt. 18.08.2022 and found in order for commissioning. </b></p>

                        <div style={{ marginTop: '80px' }}>
                            <h4>Signature of the MSEDCL Officer <br />Name, <br />Designation <br />Date and seal</h4>
                        </div>

                    </div>

                    <br /><br />

                    <div className='page-break'>
                        <h3 style={{ color: "black", margin: "20px" }}>Undertaking/Self- Declaration for Domestic Content Requirement fulfillment</h3>
                        <center><h4>(On a plain Paper)</h4></center>
                        <p><b>
                            1. This is to certify that M/S Mayur Pramod Dhokale has installed {user.total_capacity} KW [Capacity] Grid Connected Rooftop Solar Plant for {user.name} [Consumer Name] at {user.site_location} [Address] under application number {user.sanction_number} dated {user.declaration_date}.[date of application] under {user.discom} [DISCOM Name].
                        </b></p>

                        <p><b>
                            2. It is hereby undertaken that the PV modules installed for the above-mentioned project are domestically manufactured using domestic manufactured solar cells. The details of installed PV Modules are follows:
                        </b></p>

                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th>PV Module Capacity :</th>
                                    <th>{user.wattage_per_module * user.num_modules}</th>
                                </tr>
                                <tr>
                                    <th>Number of PV Modules :</th>
                                    <th>{user.num_modules}</th>
                                </tr>
                                <tr>
                                    <th>Sr No of PV Module :</th>
                                    <th><input type='text' maxLength={15}></input></th>
                                </tr>
                                <tr>
                                    <th>PV Module Make :</th>
                                    <th>{user.inverter_make}</th>
                                </tr>
                                <tr>
                                    <th>Cell manufacturer’s name:</th>
                                    <th>{user.cell_name}</th>
                                </tr>
                                <tr>
                                    <th>Cell GST invoice No:</th>
                                    <th>{user.gst_number}</th>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>3. The above undertaking is based on the certificate issued by PV Module manufacturer/supplier while supplying the above mentioned order.</b></p>

                        <p><b>4. I,<input type="text" className='lines' required />on behalf of M/S Mayur Pramod Dhokale [Company Name] further declare that the information given above is true and correct and nothing has been concealed therein. If anything is found incorrect at any stage, then REC/ MNRE may take any appropriate action against my company for wrong declaration. Supporting documents and proof of the above information will be provided as and when requested by MNRE.</b></p>

                     <div>
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

                    </div>


                    <div className='page-break' >
                        <h1 style={{color:"black",textDecoration:"underline"}}>
                            <center>Net Metering Connection Agreement</center>
                        </h1>
                        <p><b>
                            This Agreement is made and entered into at  {user.address}  on this {user.site_location} day of {user.netmeter_date} between the Eligible Consumer {user.name} (NAME) having premises at {user.site_location} (ADDRESS) and Consumer No. {user.consumer_number}  As the first Party,
                        </b></p>

                        <p><b><center>AND</center></b></p>

                        <p><b>The Distribution Licensee- Maharashtra State Electricity Distribution Co. Ltd; and having its Registered Office at {user.second_address} as second Party of this Agreement;</b></p>

                        <p><b>Whereas, the Eligible Consumer has applied to the Licensee for approval of a Net Metering Arrangement under the provisions of the Maharashtra Electricity Regulatory Commission (Net Metering for Roof-top Solar Photo Voltaic Systems) Regulations, 2015 ('the Net Metering Regulations') and sought its connectivity to the Licensee's Distribution Network ;</b></p>

                        <p><b>And whereas, the Licensee has agreed to provide Network connectivity to the Eligible Consumer for injection of electricity generated from its Roof-top Solar PV System of {user.total_capacity} kilowatt;<br />Both Parties hereby agree as follows:-</b></p>
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
                                In the witness where of Mayur Pramod Dhokale for and on behalf of Eligible Consumer and Shri. {user.shri} for and on behalf of MSEDCL agree to this agreement.
                            </b></p>
                        </div>

                        <br />

                        <div className='inline-container'>
                            <div style={{ width: '50%' }}>
                                <div className='inline-container'>
                                    <label htmlFor="">Name:</label>
                                    <input type="text" className='lines' />
                                </div>
                                <center>For Eligible Consumer</center>
                                <br /><br /><br />
                                <p>Witness 1(VENDOR):</p>
                            </div>

                            <div style={{ width: '50%' }}>
                                <div className='inline-container'>
                                    <label htmlFor="">Shri:</label>
                                    <input type="text" className='lines' />
                                </div>
                                <center>for and on behalf of MSEDCL</center>
                                <br /><br /><br />
                                <p>Witness 1:</p>
                            </div>

                        </div>

                    </div>

                    <br /><br />
<div className='page-break'>
                    <div class="agreement-container">
                        <h1><center>Model Agreement</center></h1>
                        <h4 className='center'>Between</h4>
                        <p>
                            Applicant and the registered/empanelled Vendor for installation of rooftop solar system in
                            residential house of the Applicant under simplified procedure of Rooftop Solar Programme Ph-II.
                        </p>
                        <p>
                            This agreement is executed on {user.installation_date}
                            design, installation, commissioning, and five years comprehensive maintenance of a rooftop solar system
                            to be installed under simplified procedure of Rooftop Solar Programme Ph-II.
                        </p>


                        <h4 className='center'>Between</h4>
                        {user.name} having residential electricity
                        connection with consumer number {user.consumer_number} from {user.discom}   (DISCOM) at {user.address}

                        <p>
                            <h4 className='center'>And</h4>
                            Mayur Pramod Dhokale is registered/empanelled with the {user.discom}
                            (DISCOM) and is having registered/functional office at Second Floor Tirupati Complex Opp Lodha Market Near Mosam Pool Malegaon-423203
                        </p>
                        <h3 className='center'>Whereas</h3>
                        <p>The Applicant intends to install rooftop solar system under simplified procedure of Rooftop Solar Programme
                            Ph-II of the MNRE.</p>
                        <p>The Vendor is registered/empanelled vendor with DISCOM for installation of rooftop solar under MNRE Schemes.
                            The Vendor satisfies all the existing regulation pertaining to electrical safety and license in the
                            respective state and it is not debarred or blacklisted from undertaking any such installations by any
                            state/central Government agency.</p>
                        <p>Both the parties are mutually agreed and understand their roles and responsibilities and have no liability to
                            any other agency/firm/stakeholder especially to DISCOM and MNRE.</p>


                        <section>
                            <h3><b>1.</b> GENERAL TERMS:</h3>
                            <ul>
                                <li>
                                    <b>1.1.</b>  The Applicant hereby represents and warrants that the Applicant has the sole legal capacity to
                                    enter into this Agreement and authorise the construction, installation and commissioning of the
                                    Rooftop Solar System (“RTS System”) which is inclusive of Balance of System (“BoS”) on the
                                    Applicants premises (“Applicant Site”). The Vendor reserves its right to verify ownership of the
                                    Applicant Site and Applicant covenants to co-operate and provide all information and documentation
                                    required by the Vendor for the same.
                                </li>
                                <li>
                                    <b> 1.2. </b>Vendor may propose changes to the scope, nature and or schedule of the services being performed
                                    under this Agreement. All proposed changes must be mutually agreed between the Parties. If Parties
                                    fail to agree on the variation proposed, either Party may terminate this Agreement by serving notice
                                    as per Clause 13.
                                </li>
                                <li>
                                    <b>1.3.</b>  The Applicant understands and agrees that future changes in load, electricity usage patterns
                                    and/or electricity tariffs may affect the economics of the RTS System and these factors have not
                                    been and cannot be considered in any analysis or quotation provided by Vendor or its Authorized
                                    Persons (defined below).
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h3><b>2.</b> RTS System</h3>
                            <ul>
                                <li><b>2.1.</b>Total capacity of the RTS System will be minimum
                                    {user.num_modules * user.wattage_per_module} kWp.
                                </li>
                                <li><b>2.2.</b>Solar modules, inverters, and BoS will conform to minimum specifications and DCR requirements of
                                    MNRE.</li>
                                <li>
                                    <b>2.3.</b>  Solar modules of {user.module_make} make &model, {user.num_modules * user.wattage_per_module}Wp capacity each and
                                    {user.efficiency}% efficiency will be procured and installed by the Vendor
                                </li>
                                <li>Solar inverter of {user.inverter_make} make & model,{user.num_modules * user.wattage_per_module} kW rated output capacity will be
                                    procured and installed by the Mayur Pramod Dhokale</li>
                                <li>
                                    <b>2.5.</b> Module mounting structure has to withstand minimum wind load pressure as specified by MNRE.
                                </li>
                                <li><b>2.6.</b> Other BoS installations shall be as per best industry practice with all safety and protection
                                    gears installed by the vendor.
                                </li>

                            </ul>
                        </section>
                        <section>
                            <h3><b>3.</b> Price and Payment Terms</h3>
                            <ol>
                                <p>
                                    <b>3.1.</b>   The cost of RTS System will be Rs. {user.rupees} (to be decided mutually).The Applicant shall pay the
                                    total cost to the vendor as under:
                                </p>
                                <ul>
                                    <li>XX% as an advance on confirmation of the order.</li>
                                    <li>XX% before dispatch of solar panels, inverters, and BoS items.</li>
                                    <li>XX% after installation and commissioning.</li>
                                </ul>
                                <p><b>3.2.</b> The order value and payment terms are fixed and will not be subject to any adjustment except as
                                    approved in writing by Vendor. The payment shall be made only through bankers’ cheque / NEFT / RTGS /
                                    online payment portal as intimated by Vendor. No cash payments shall be accepted by Vendor or its
                                    Authorised Person.</p>
                            </ol>
                        </section>
                        <section>
                            <h3><b>4.</b> Representations made by the Applicant:</h3>
                            <p>The Applicant acknowledges and agrees that:</p>
                            <ol>
                                <li><b>4.1.</b> any timeline or schedule shared by Vendor for the provision of services and delivery of the
                                    RTS System is only an estimate and Vendor will not be liable for any delay that is not
                                    attributable to Vendor;</li>
                                <li><b>4.2.</b> all information disclosed by the Applicant to Vendor in connection with the supply of the RTS
                                    System (or any part thereof), services and generation estimation (including, without limitation, the
                                    load profile and power bill) are true and accurate, and acknowledges that Vendor has relied on the
                                    information produced by the Applicant to customise the RTS System layout and BoS design for the
                                    purposes of this Agreement;</li>
                                <li>
                                    <b>4.3.</b>  all descriptive specifications, illustrations, drawings, data, dimensions, quotation, fact
                                    sheets, price lists and any advertising material circulated/published/provided by Vendor are
                                    approximate only;
                                </li>
                                <li><b>4.4.</b> any drawings, pre-feasibility report, specifications and plans composed by Vendor shall require
                                    the Applicant’s approval within 5 (five) days of its receipt by electronic mail to Vendor and if the
                                    Applicant does not respond within this period, the drawings, specifications or plans shall be final
                                    and deemed to have been approved by the Applicant;</li>
                                <li><b>4.5.</b> the Applicant shall not use the RTS System or any part thereof, other than in accordance with
                                    the product manufacturer’s specifications, and covenants that any risk arising from misuse or/and
                                    misappropriate use shall be to the account of the Applicant alone.</li>

                                <li><b>4.6.</b> The Applicant represents, warrants and covenants that:
                                    <ol>
                                        <li>(i) all electrical and plumbing infrastructure at the Applicant Site are in conformity with
                                            applicable laws;</li>

                                        <li>(ii) the Applicant has the legal capacity to permit unfettered access to Vendor and its
                                            Authorized Persons for the purposes of execution and performance of this Agreement;</li>

                                        <li>
                                            (iii) the Applicant has and will provide requisite power, water and other requisite
                                            resources and storage facilities for construction, installation, operation and maintenance
                                            of the RTS System;
                                        </li>
                                        <li>
                                            the Applicant will provide support for site fabrication of structure, assembly and fitting
                                            of module mounting structure at Applicant Site;
                                        </li>
                                        <li>
                                            (v) the Applicant will ensure that the Applicant Site is shadow free and free of all
                                            encumbrances during the lifetime of the RTS System;
                                        </li>
                                        <li>(v) the Applicant will ensure that the Applicant Site is shadow free and free of all
                                            encumbrances during the lifetime of the RTS System;</li>
                                        <li>(vi) Applicant should ensure that the Applicant regularly cleans and ensures accessibility
                                            and safety to the RTS System, as required by Vendor and dusting frequency in the premises.
                                        </li>
                                        <li>
                                            (vii) Vendor is entitled to permit geo-tagging of the Applicant Site as a Vendor installation site;
                                        </li>
                                        <li>
                                            (viii) Unless otherwise intimated by the Applicant in writing, Vendor is entitled to take photographs,
                                            videos and testimonials of the Applicant and the Applicant Site, and to create content which will become
                                            the property of Vendor and the same can be freely used by Vendor as part of its promotional and
                                            marketing activities across all platforms as it deems fit;
                                        </li>
                                        <li>
                                            (ix) the Applicant validates the stability of the Applicant Site for the installation of the RTS System.

                                        </li>
                                    </ol>

                                </li>
                            </ol>

                        </section>
                        <section>
                            <h3><b>5.</b> Maintenance</h3>
                            <ol>

                                <li><b>5.1.</b> Vendor shall provide five-year free workmanship maintenance. Vendor shall visit the
                                    Applicant’s premises at least once every quarter after commissioning of the RTS System for
                                    maintenance purposes.</li>
                                <li><b>5.2.</b> During such maintenance visit, Vendor shall check all nuts and bolts, fuses, earth resistance
                                    and other consumables in respect of the RTS System to ensure that it is in good working
                                    condition.
                                </li>
                                <li><b>5.3.</b>Cleaning requirement/expectation from the Applicant side – Applicant responsibility,
                                    minimum expectation from Applicant that it will be cleaned regularly as per the dusting frequency.
                                </li>
                            </ol>
                        </section>
                        <section>
                            <h3><b>6.</b> Access and Right of Entry</h3>
                            <ol>
                                <p><b>6.1.</b>The Applicant hereby grants permission to Vendor and its authorized personnel,
                                    representatives, associates, officers, employees, financing agents, subcontractors (“Authorized
                                    Persons”) to enter the Applicant Site for the purposes of:</p>
                                <ol>
                                    <li>(a) conducting feasibility study;</li>
                                    <li>(b) storing the RTS System/any part thereof;</li>
                                    <li>(c) installing the RTS System;</li>
                                    <li>(d) inspecting the RTS System;</li>
                                    <li>(e) conducting repairs and maintenance to the RTS System;</li>
                                    <li>(f) removing the RTS System (or any part thereof), if necessary for any reason whatsoever;</li>
                                    <li>(g) Such other matters as necessary to execute and perform its rights and obligations under
                                        this Agreement.</li>
                                </ol>
                                <p>6.2. The Applicant shall ensure that third-party consents necessary for the Authorized Persons to
                                    access the Applicant Site are obtained prior to commencement of services under this Agreement.</p>
                            </ol>
                        </section>
                        <section>
                            <h3><b>7.</b> Warranties</h3>
                            <ol>
                                <li>
                                    <b>7.1.</b>  Product Warranty: The Applicant shall be entitled to manufacturers warranty. Any warranty
                                    in relation to RTS System supplied to the Applicant by Vendor under this Agreement is limited
                                    to the warranty given by the manufacturer of the RTS System (or any part thereof) to Vendor.
                                </li>
                                <li><b>7.2.</b> Installation Warranty: Vendor warrants that all installations shall be free from workmanship
                                    defects or BOS defects for a period of five years from the date of installation of the RTS System. The
                                    warranty is limited to Vendor rectifying the workmanship or BOS defects at Vendors expense in respect
                                    of those defects reported by the Applicant, in writing. The Applicant is obliged and liable to report
                                    such defects within 15 (fifteen) days of occurrence of
                                    such defect.</li>
                                <li><b>7.3.</b> Subject to manufacturer warranty, Vendor warrants that the solar modules supplied herein shall have
                                    tolerance within a five percentage range (+/-5%). The peak-power point voltage and the peak-power point
                                    current of any supplied solar module and/or any module string (series connected modules) shall not vary
                                    by more than 5% (five percent) from the respective arithmetic means for all modules and/or for all
                                    module strings, as the case may be, providedthe RTS System is properly maintained and the Applicant Site
                                    is free from shadow at the time
                                    of operation of the RTS System.

                                </li>

                                <li>
                                    <b>7.4.</b>   Exceptions for warranty:
                                    <ol>
                                        <p>(a) Any attempt by any person other than Vendor or its Authorised Persons to adjust, modify, repair
                                            or provide maintenance to the RTS System, shall disentitle the Applicant of the warranty provided by
                                            Vendor hereunder.</p>
                                        <p>(b) Vendor shall not be liable for any degeneration or damage to the RTS System due to any action or
                                            inaction on the part of the Applicant.</p>
                                        <p>(c) Vendor shall not be bound or liable to remedy any damage, fault, failure or malfunction of the
                                            RTS System owing to external causes, including but not limited to accidents, misuse, neglect, if
                                            usage and/or storage and/or installation are non-confirming to product instructions, modifications
                                            by the Applicant leading to shading or accessibility issues, failure to perform required
                                            maintenance, normal wear and tear, Force Majeure Event, or negligence or default attributable to the
                                            Applicant.</p>
                                        <p>(d) VendorshallnotbeliabletorepairorremedyanyaccessoriesorpartsaddedtotheRTS System that were not
                                            originally sourced by Vendor to the Applicant.
                                        </p>
                                    </ol>
                                </li>
                            </ol>
                        </section>
                        <section>
                            <h3><b>8.</b> Performance Guarantee</h3>
                            <ol>
                                <p>
                                    8.1. Vendor guarantees minimum system performance ratio of 75% as per performance ratio test
                                    carried out in adherence to IEC 61724 or equivalent BIS for a period of five years.
                                </p>
                            </ol>
                        </section>
                        <section>
                            <h3><b>9.</b> Insurance</h3>
                            <ol>
                                <p>
                                    <b>9.1.</b>  Vendor may, at its sole discretion, obtain insurance covering risks of loss/damage to the RTS
                                    System (any part thereof) during transit from Vendors warehouse until delivery to the
                                    Applicant Site and until installation and commissioning.
                                </p>
                                <p>
                                    <b>9.2.</b> Thereafter, all risk shall pass on to the Applicant and the Applicant may accordingly procure
                                    relevant insurances.
                                </p>
                            </ol>
                        </section>
                        <section>
                            <h3><b>10.</b> Cancellation</h3>
                            <ol>
                                <li><b>10.1.</b> The Applicant may cancel the order placed on Vendor within 7 (seven) days from the
                                    date of remittance of advance money or the date of order acceptance, whichever is earlier
                                    (“Order Confirmation”) by serving notice as per Clause 13.</li>
                                <li><b>10.2.</b> If the Applicant cancels the order after the expiry of 7 (seven) days from the date of
                                    Order Form, the Applicant shall be liable to pay Vendor, a cancellation fee of XX% of the total
                                    order value plus costs and expenses incurred by Vendor, including, costs for labour, design, return
                                    of products, administrative costs, subvention costs.</li>
                                <li>
                                    <b>10.3.</b>  Notwithstanding the aforesaid, the Applicant shall not be entitled to cancel the Order Form
                                    after Vendor has dispatched the RTS System (or any part thereof, including BOS) to the Applicant
                                    Site. If Applicant chooses to terminate the Order Form after dispatch, the entire amount paid by the
                                    Applicant till date, shall be forfeited by Vendor.
                                </li>
                            </ol>
                        </section>
                        <section>
                            <h3><b>11.</b> LIMITATION OF LIABILITY AND INDEMNITY:</h3>
                            <ol>
                                <p>
                                    <b>11.1.</b>  To the extent that terms implied by law apply to the RTS System and the services
                                    rendered under this Agreement, Vendors liability for any breach of those terms is limited to:
                                    <p> (a) repairing or replacing the RTS System/any part thereof, as applicable; or</p>
                                    <p>(b) RefundofthemoneyspaidbytheApplicanttoVendor,ifVendorcannotfulfiltheorder.</p>
                                </p>
                            </ol>
                        </section>
                        <section>
                            <h3>
                                <b> 12.</b>SUSPENSION AND TERMINATION:</h3>
                            <ol>
                                <li><b>12.1.</b> If the Applicant fails to pay any sum due under this Agreement on the due date, Vendor
                                    may, in addition to its other rights under this Agreement, suspend its obligations under this Agreement
                                    until all outstanding amounts (including interest due) are paid.</li>
                            </ol>
                        </section>
                        <section>
                            <h3><b>13.</b> Notices</h3>
                            <ol>
                                <li><b>13.</b> NOTICES: Any notice or other communication under this Agreement to Vendor and or to the Applicant,
                                    shall be in writing, in English language and shall be delivered or sent: (a) by electronic mail and/or
                                    (b) by hand delivery or registered post/courier, at the registered address of Applicant/Vendor.</li>
                            </ol>
                        </section>
                        <section>
                            <h3><b>14.</b> FORCE MAJEURE EVENT:</h3>
                            <ol>
                                <p>
                                    <b> 14.1.</b>  Neither Party shall be in default due to any delay or failure to perform its/his/her/their
                                    obligations under this Agreement which arises from or is a consequence of occurrence of an event which
                                    is beyond the reasonable control of such Party, and which makes performance of its/his/her/their
                                    obligations under this Agreement impossible or so impractical as reasonably to be considered impossible
                                    in the circumstances, and includes, but is not limited to, war, riot, civil disorder, earthquake, fire,
                                    explosion, storm, flood or other adverse weather conditions, pandemic, epidemic, embargo, strikes,
                                    lockouts, labour difficulties, other industrial action, acts of government, unavailability of equipment
                                    from vendor, changes requested by the Applicant (“Force Majeure Event”).
                                </p>
                            </ol>
                        </section>
                        <section>
                            <h3> <b>15.</b> GOVERNING LAW AND DISPUTE RESOLUTION:</h3>
                            <ol>
                                <li><b>15.1.</b> The interpretation and enforcement of this Agreement shall be governed by the laws
                                    of India</li>
                                <li><b>15.2.</b> In the event of any dispute, controversy or difference between the Parties arising out
                                    of, or relating to this Agreement (“Dispute”), both Parties shall make an effort to resolve the Dispute
                                    in good faith, failing which, any Party to the Dispute shall be entitled to refer the Dispute to
                                    arbitration to resolve the Dispute in the manner set out in this Clause. The rights and obligations of
                                    the Parties under this Agreement shall remain in full force and effect pending the award in such
                                    arbitration proceeding.</li>
                                <li>
                                    <b>15.3.</b> The arbitration proceeding shall be governed by the provisions of the Arbitration and Conciliation
                                    Act, 1996 and shall be settled by a sole arbitrator mutually appointed by the Parties.

                                </li>
                            </ol>
                        </section>

                    </div>
                    </div>
                    <center>
                        <button onClick={handlePrint}>Print Page</button>
                    </center>
                </div>
            </div >

        </>


    )
}

export default PrintFormat
