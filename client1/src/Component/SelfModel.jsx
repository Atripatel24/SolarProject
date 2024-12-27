import React from 'react'
import stamp from '../assets/stamp.png';

const SelfModel = ({ user }) => {
    console.log(user)
  return (
    <div>
    <div className='a4-page-selfdeclar'>
    <h3 ><b>Undertaking/Self- Declaration for Domestic Content Requirement fulfillment</b></h3>
    <center><h4>(On a plain Paper)</h4></center>
    <p>
        1. This is to certify that M/S Mayur Pramod Dhokale has installed {user?.total_capacity} KW [Capacity] Grid Connected Rooftop Solar Plant for {user.name} [Consumer Name] at {user?.site_location} [Address] under application number {user.sanction_number} dated {user.declaration_date}.[date of application] under{user.discom_name
        }  [DISCOM Name].
    </p>

    <p>
        2. It is hereby undertaken that the PV modules installed for the above-mentioned project are domestically manufactured using domestic manufactured solar cells. The details of installed PV Modules are follows:
    </p>

    <table>
        <thead></thead>
        <tbody>
            <tr>
                <th className='text-left'>1. PV Module Capacity :</th>
                <th className='text-left'>{user?.total_capacity}</th>
            </tr>
            <tr>
                <th className='text-left'>2. Number of PV Modules :</th>
                <th className='text-left'>{user?.num_modules}</th>
            </tr>
            <tr>
                <th className='text-left'>3. Sr No of PV Module :</th>
                <th className='text-left'>{user?.sr_pv_no}</th>
            </tr>
            <tr>
                <th className='text-left'>4. PV Module Make :</th>
                <th className='text-left'>{user?.inverter_make}</th>
            </tr>
            <tr>
                <th className='text-left'>5. Cell manufacturer’s name:</th>
                <th className='text-left'>{user?.cell_name}</th>
            </tr>
            <tr>
                <th className='text-left'>6. Cell GST invoice No:</th>
                <th className='text-left'>{user?.gst_number}</th>
            </tr>
        </tbody>
    </table>

    <p>3. The above undertaking is based on the certificate issued by PV Module manufacturer/supplier while supplying the above mentioned order.</p>

    <p>4. I, M/S Mayur Pramod Dhokale on behalf of  samarth energy solutions [Company Name] further declare that the information given above is true and correct and nothing has been concealed therein. If anything is found incorrect at any stage, then REC/ MNRE may take any appropriate action against my company for wrong declaration. Supporting documents and proof of the above information will be provided as and when requested by MNRE.</p>

    <div className='signatureContent'>
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

    </div>
  )
}

export default SelfModel
