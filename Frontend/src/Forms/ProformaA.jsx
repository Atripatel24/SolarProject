import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const ProformaA = () => {

    const [user, setUser] = useState({})

    const getWcr = async () => {
        // api
    }

    useEffect(() => {

        if (localuser) {
            getWcr();

        } else {
            Swal.fire({
                title: "Error!",
                text: 'Please fill up first WCR form',
                icon: "error"
            }).then(() => {
                navigate('/wcr')
            });
        }

    }, []);

    const userhandler = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    let submitHandler = async (e) => {
        e.preventDefault();
        console.log(user)
        try{

            let response = await axios.put(`http://localhost:4000/api/admin/proforma/${user._id}` , user )

            if(response.data.success){
                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success"
                }).then(() => {
                    navigate('/SelfDecleration') 
                })
            }else{
                Swal.fire({
                    title: "Error!",
                    text: response.data.message,
                    icon: "error"
                });
            }
        }catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="insideform">
                    <div>
                        <h2>
                            <center>Proforma-A</center>
                        </h2>
                        <h4>
                            <center>COMMISSIONING REPORT (PROVISIONAL) FOR GRID CONNECTED SOLAR</center>
                        </h4>
                        <h4>
                            <center>PHOTOVOLTAIC POWER PLANT (with Net-metering facility)</center>
                        </h4>

                        <p>
                            <b>Certified that a Grid Connected SPV Power Plant of <input type="text" className='lines' value={user.num_modules * user.wattage_per_module} disabled /> KWp capacity has been installed at the site <input type="text" className='lines' value={user.site_location} /> District<input type="text" className='lines' name='district' required onChange={userhandler} /> of  which has been installed by M/S Mayur Pramod Dhokale on <input type="date" value={user.installation_date} className='lines' disabled /> The system is as per BIS/MNRE specifications. The system has been checked for its performance and found in order for further commissioning.</b>
                        </p>

                        <div>
                            <label htmlFor="">Signature of the beneficiary</label>
                            <input type="file" />
                        </div>
                        <div>
                            <label htmlFor="">Signature of the agency with name, seal and date</label><input type="file" />
                        </div>


                        <p> <b>The above RTS installation has been inspected by me for Pre-Commissioning Testing of Roof Top Solar Connection on dt <input type="date" className='lines' name='connection_date' required onChange={userhandler} /> as per guidelines issued by the office of The Chief Engineer vide letter no 21653 on dt. 18.08.2022 and found in order for commissioning. </b></p>

                        <div style={{ marginTop: '80px' }}>
                            <h4>Signature of the MSEDCL Officer <br />Name, <br />Designation <br />Date and seal</h4>
                        </div>

                    </div>

                    <button>Submit </button>
                </div>
            </form>
        </>
    )
}

export default ProformaA
