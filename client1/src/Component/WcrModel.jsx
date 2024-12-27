import React from 'react';
import signature from '../assets/signature.png';
import stamp from '../assets/stamp.png';

const WcrModel = ({ user }) => {
    return (
        <div className="a4-page">
            <h3>Work Completion Report for Solar Power Plant</h3>

            <div className="table-wrapper">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Component</th>
                            <th>Observation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='th'>1</td>
                            <td>Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td className='th'>2</td>
                            <td>Consumer number</td>
                            <td>{user.consumer_number}</td>
                        </tr>
                        <tr>
                            <td className='th'>3</td>
                            <td>Site/Location With Complete Address</td>
                            <td>{user.site_location}</td>
                        </tr>
                        <tr>
                            <td className='th'>4</td>
                            <td>Category: Govt/Private Sector</td>
                            <td>{user.category}</td>
                        </tr>
                        <tr>
                            <td className='th'>5</td>
                            <td>Sanction number</td>
                            <td>{user.sanction_number}</td>
                        </tr>
                        <tr>
                            <td className='th' rowSpan={2}>6</td>
                            <td>Sanctioned Capacity of solar PV system (KW) Installed</td>
                            <td>{user.sanctioned_capacity}</td>
                        </tr>
                        <tr>
                            <td>Capacity of solar PV system (KW)</td>
                            <td>{user.installed_capacity}</td>
                        </tr>
                        <tr>
                            <td className='th' rowSpan={7}>7</td>
                            <td className='th' colSpan={2}><b>Specification of the Modules</b></td>
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
                            <td className='th' rowSpan={7}>8</td>
                            <td className='th' colSpan={2}><b>PCU</b></td>
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
                    <tr>
                        <td rowSpan={4}> 10.</td>
                        <td colSpan={2}><center>disom</center></td>
                    </tr>
                    <tr>
                        <td>Disom Name</td>
                        <td>{user.discom_name}</td>
                    </tr>
                    <tr>
                        <td>Discom Address</td>
                        <td>{user.discom_address}</td>
                    </tr>
                    </tbody>
                </table>
                <div className="paraWrapper">
                    <p className='para'>

                        We Mayur Pramod Dhokale&nbsp;[Vendor] &nbsp;&nbsp;& &nbsp;{user.name}
                        bearing Consumer Number {user.consumer_number} Ensured structural stability of
                        installed solar power plant and obtained requisite permissions from the concerned authority. If in
                        future, by virtue of any means due to collapsing or damage to installed solar power plant, MSEDCL
                        will not be held responsible for any loss to property or human life, if any.
                    </p>
                    <p className="para">
                        This is to Certified
                        above Installed Solar PV System is working properly with electrical safety & Islanding switch in
                        case of any presence of backup inverter an arrangement should be made in such way the backup
                        inverter supply should never be synchronized with solar inverter to avoid any electrical accident
                        due to back feeding. We will be held responsible for non-working of islanding mechanism and back
                        feed to the de-energized grid.
                    </p>
                </div>
                
                <div className="signature-section">
                    <div>
                        <img src={signature} alt="Vendor Signature" />
                        <label>Signature [Vendor]</label>
                    </div>
                    <div>
                        <img src={`https://admin.samarthenergysolution.com${user.signature}`} alt="Consumer Signature" />
                        <label>Signature [Consumer]</label>
                    </div>
                </div>

            </div>


            <div style={{ color: 'black', marginTop: '40px' }}>
                <h4 className='left marginTop'>Guarantee Certificate Undertaking to be submitted by VENDOR</h4>
                <p>
                    The undersigned will provide the services to the consumers for repairs/maintenance of the RTS plant
                    free of cost for 5 years of the comprehensive Maintenance Contract (CMC) period from the date of
                    commissioning of the plant. Non performing/under-performing system component will be
                    replaced/repaired free of cost in the CMC period
                </p>
            </div>

            <div className="signature-section">
                <div>
                    <img src={signature} alt="Vendor Signature" />
                    <label>Signature [Vendor]</label>
                </div>
                <div>
                    <img src={stamp} alt="Stamp & Seal" />
                    <label>Stamp & Seal</label>
                </div>
            </div>
            <div>
                <h4 className='left'>Identity Details of Consumer :-</h4><br />
                
                <div className='inline-container'>
                    <label htmlFor="">Aadhar Number :</label>
                    {user.aadhar_number}
                   
                </div>
                <img src={`https://admin.samarthenergysolution.com${user.aadharImage}`} style={{ width: '400px', height: '300px' }} alt="aadhar card" />
            </div>
           

            


        </div>
    );
};

export default WcrModel;
