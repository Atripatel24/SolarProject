import React from 'react';
import stamp from '../assets/stamp.png';

const AnnexureModel = ({ user }) => {
    // Static values for missing data
    const staticValue = "-- Not Provided --";

    return (
        <div className="a4-page-annexure1">
            {/* Header Section */}
            <div className="header">
                <h2 style={{ color: "grey" }}><center>Renewable Energy Generating System</center></h2>
                <h3><center>Annexure-I</center></h3>
                <h5><center>(Commissioning Report for RE System)</center></h5>
            </div>

            {/* Table Section */}
            <div>
                <table className='annexure'>
                    <thead>
                        <tr>
                            <th>SNo.</th>
                            <th>Particulars</th>
                            <th>As Commissioned</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Name of the Consumer</td>
                            <td>{user.name || staticValue}</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Consumer Number</td>
                            <td>{user.consumer_number || staticValue}</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Mobile Number</td>
                            <td>{user.mobile || staticValue}</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>E-mail</td>
                            <td>{user.email || staticValue}</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Address of Installation</td>
                            <td>{user.site_location || staticValue}</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>RE Arrangement Type</td>
                            <td>Net Metering Arrangement</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>RE Source</td>
                            <td>Solar</td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>Sanctioned Capacity(KW)</td>
                            <td>{user.sanctioned_capacity || staticValue}</td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>Capacity Type</td>
                            <td>Rooftop</td>
                        </tr>
                        <tr>
                            <td>10.</td>
                            <td>Project Model</td>
                            <td>Capex</td>
                        </tr>
                        <tr>
                            <td>11.</td>
                            <td>RE installed Capacity(Rooftop)(KW)</td>
                            <td>{user.total_capacity || staticValue}</td>
                        </tr>
                        <tr>
                            <td>12.</td>
                            <td>RE installed Capacity(Rooftop + Ground)(KW)</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>13.</td>
                            <td>RE installed Capacity(Ground)(KW)</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>14.</td>
                            <td>Installation date</td>
                            <td>{user.installation_date || staticValue}</td>
                        </tr>
                        <tr>
                            <td>15.</td>
                            <td style={{ textAlign: 'left' }}><b>SolarPV Details</b></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Inverter Capacity(KW)</td>
                            <td>{user.inverter_capacity || staticValue}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Inverter Make</td>
                            <td>{user.inverter_make || staticValue}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>No. of PV Modules</td>
                            <td>{user.num_modules || staticValue}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Module Capacity (KW)</td>
                            <td>{user.total_capacity || staticValue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Proforma-A Section */}
            <div className="page-a4-proforma">
                <h3 style={{ color: "black" }}><center><b>Proforma-A</b></center></h3>
                <h3 style={{ margin: "7px", color: "black" }}><center>COMMISSIONING REPORT (PROVISIONAL) FOR GRID CONNECTED SOLAR</center></h3>
                <h3 style={{ margin: "7px", color: "black" }}><center>PHOTOVOLTAIC POWER PLANT (with Net-metering facility)</center></h3>

                <p>
                    Certified that a Grid Connected SPV Power Plant of {user.total_capacity || staticValue} KWp capacity has been installed at the site {user.site_location || staticValue}, District of MAHARASHTRA which has been installed by M/S {user.name || staticValue} on {user.installation_date || staticValue}. The system is as per BIS/MNRE specifications. The system has been checked for its performance and found in order for further commissioning.
                </p>

                <div className="signature-section" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <img src={`https://admin.samarthenergysolution.com${user.signature}`} style={{ width: '200px', height: '150px' }} alt="Consumer Signature" />
                        <label>Signature of the beneficiary</label>
                    </div>
                    <div>
                        <img src={stamp} alt="Example" style={{ width: '200px', height: '150px' }} />
                        <label>Signature of the agency with name, seal and date</label>
                    </div>
                </div>
<br>
</br><br/>
                <p>
                    The above RTS installation has been inspected by me for Pre-Commissioning Testing of Roof Top Solar Connection on dt &nbsp; {user.connection_date} &nbsp; as per guidelines issued by the office of The Chief Engineer vide letter no 21653 on dt. 18.08.2022 and found in order for commissioning.
                </p>

                <div>
                    <h4>Signature of the MSEDCL Officer <br />Name, <br />Designation <br />Date and seal</h4>
                </div>
            </div>
        </div>
    );
};

export default AnnexureModel;
