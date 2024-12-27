import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from "react-dropzone";
import signature from '../assets/signature.png';
import stamp from '../assets/stamp.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';

const Wcr = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const params = useParams();


    const [errors, setErrors] = useState({
        consumerNumber: "",
        phoneNumber: "",
        email: "",
    });

useEffect(()=>{
    if(params.id){
        getData();
    }
    
  
},[])

useEffect(()=>{
    // console.log(user)
},[user])

let getData = async () => {
    let res = await axios.get(`https://admin.samarthenergysolution.com/api/user/${params.id}`)
    console.log("data", res.data)
    setUser(res.data.data)
}


    const userhandler = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }



    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        console.log(file)
        setUser({ ...user, 'aadharImage': file })

        setFiles((prevFiles) => [
            ...prevFiles,
            ...acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            ),
        ]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/*",
        multiple: false,
    });

    // Remove Aadhar Image 

    const removeaadhar = () => {
        setFiles([])
        setUser({
            ...user, aadharImage: null
        })
    }


    const [consumerPreview, setConsumerPreview] = useState(null);

    // Preview image
    const handleImageChange = (event, setPreview) => {
        const file = event.target.files[0];
        // console.log(file)

        setUser({ ...user, 'signature': file })
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);

        }
    };

    // only number
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
        e.preventDefault()
        // setUser({ ...user , 'total_capacity' : user.num_modules * user.wattage_per_module})
        console.log('user', user);

        let formdata = new FormData();

        formdata.append('name', user.name);
        formdata.append('consumer_number', user.consumer_number);
        formdata.append('site_location', user.site_location);
        formdata.append('category', user.category);
        formdata.append('sanction_number', user.sanction_number);
        formdata.append('sanctioned_capacity', user.sanctioned_capacity);
        formdata.append('installed_capacity', user.installed_capacity);
        formdata.append('module_make', user.module_make);
        formdata.append('almm_model', user.almm_model);
        formdata.append('wattage_per_module', user.wattage_per_module);
        formdata.append('num_modules', user.num_modules);
        formdata.append('total_capacity', user.total_capacity);
        formdata.append('warranty_details', user.warranty_details);
        formdata.append('inverter_make', user.inverter_make);
        formdata.append('rating', user.rating);
        formdata.append('inverter_capacity', user.inverter_capacity);
        formdata.append('manufacturing_year', user.manufacturing_year);
        formdata.append('earthings', user.earthings);
        formdata.append('earth_resistance', user.earth_resistance);
        formdata.append('lightning_arrester', user.lightning_arrester);
        formdata.append('aadhar_number', user.aadhar_number);
        formdata.append('discom_name',user.discom_name);
        formdata.append('discom_address',user.discom_address);
        formdata.append('signature', user.signature);
        formdata.append('aadharImage', user.aadharImage);
        formdata.append('hpd',user.hpd);
        formdata.append('charge_controller',user.charge_controller);

        try {

            if(params.id){
                console.log(params.id)
                let response = await axios.put(`https://admin.samarthenergysolution.com/api/edituser/${params.id}`, formdata)

            if (response.data.success) {
                console.log('DatabaseUser', response.data.data._id)

                // localStorage.setItem('id', response.data.data._id)

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
            }
            else{
                console.log("cfwcw")
                let response = await axios.post('https://admin.samarthenergysolution.com/api/users', formdata)

            if (response.data.success) {
                console.log('DatabaseUser', response.data.data._id)

                localStorage.setItem('id', response.data.data._id)

                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success"
                }).then(() => {
                    navigate('/Annexure1')
                })
            } else {
                Swal.fire({
                    title: "Error!",
                    text: response.data.message,
                    icon: "error"
                });
            }
            }


        } catch (err) {

        }

    }

    return (
        <>
        <div className="insideform">
            <form onSubmit={submitHandler}>
               

                    <div class="form-section">
                        <h1>
                            <center>General Information</center>
                        </h1><br />
                        <label for="name">Name<span>*</span></label>
                        <input type="text" name="name" required onChange={userhandler} value={user.name}/>

                        <label for="consumer-number">Consumer Number<span>*</span></label>
                        <input type="text" name="consumer_number" required onChange={userhandler} maxLength={12} onKeyDown={handleKeyDown} value={user.consumer_number}/>

                        {errors.consumerNumber && <p style={{ color: "red" }}>{errors.consumerNumber}</p>}

                        <label for="site-location">Site/Location (Complete Address)<span>*</span></label>
                        <textarea id="site-location" name="site_location" rows="3" required onChange={userhandler} value={user.site_location}></textarea>

                        <label for="category">Category<span>*</span></label>
                        <select id="category" name="category" required onChange={userhandler} value={user.category} >
                            <option value="option">Select option</option>
                            <option value="government">Government</option>
                            <option value="private">Private Sector</option>
                        </select>

                        <label for="sanction-number">Sanction Number</label>
                        <input type="text" id="sanction-number"  name="sanction_number" required onChange={userhandler} onKeyDown={handleKeyDown} value={user.sanction_number}/>
                    </div>

                    <div class="form-section">
                        <h1>
                            <center>Solar PV System Details</center>
                        </h1><br />
                        <label for="sanctioned-capacity">Sanctioned Capacity (KW)</label>
                        <input type="text" id="sanctioned-capacity"  name="sanctioned_capacity" required onChange={userhandler} onKeyDown={handleKeyDown} value={user.sanctioned_capacity}/>

                        <label for="installed-capacity">Installed Capacity (KW)</label>
                        <input type="text" id="installed-capacity"  name="installed_capacity" required onChange={userhandler} onKeyDown={handleKeyDown} value={user.installed_capacity}/>


                        <label for="module-make">Make of Module</label>
                        <input type="text" id="module-make" name="module_make" required onChange={userhandler} value={user.module_make}/>

                        <label for="almm-model">ALMM Model Number</label>
                        <input type="text" id="almm-model" name="almm_model" onChange={userhandler}  onKeyDown={handleKeyDown} value={user.almm_model}/>

                        <label for="wattage-per-module">Wattage Per Module<span>*</span></label>
                        <input type="text" id="wattage-per-module" name="wattage_per_module"  required onChange={userhandler} onKeyDown={handleKeyDown} value={user.wattage_per_module}/>

                        <label for="num-modules">Number of Modules<span>*</span></label>
                        <input type="key" id="num-modules" name="num_modules" required onChange={userhandler}  onKeyDown={handleKeyDown} value={user.num_modules}/>

                        <label for="total-capacity">Total Capacity (WP)<span>*</span></label>
                        <input type="text" id="total-capacity" name="total_capacity" required value={user.total_capacity} onChange={userhandler} />

                        <label for="warranty-details">Warranty Details (Product + Performance)<span>*</span></label>
                        <textarea id="warranty-details" name="warranty_details" rows="3" onChange={userhandler} value={user.warranty_details}></textarea>
                    </div>

                    <div class="form-section">
                        <h1>
                            <center>Inverter and Protection Details</center>
                        </h1><br />
                        <label for="inverter-make">Make & Model Number of Inverter:</label>
                        <input type="text" id="inverter-make" name="inverter_make" required onChange={userhandler} value={user.inverter_make}/>

                        <label>Rating:</label>
                    
                        <select id="rating" name="rating" onChange={userhandler} onKeyDown={handleKeyDown} required value={user.rating}>
                        <option value="select">select number of ratings   </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </select>



                        <label for="charge-controller">Type of Charge Controller/MPPT:</label>
                        <input type='text' name='charge_controller' value={user.charge_controller} onChange={userhandler} />
                        <br />



                        <label for="inverter-capacity">Capacity of Inverter:</label>
                        <input type="text" id="inverter-capacity" name="inverter_capacity"  required onChange={userhandler} value={user.inverter_capacity}/>

                        <label for="hpd">HPD:</label>
                       
                        <select id="hpd" name="hpd" onChange={userhandler} required value={user.hpd}>
                        <option value="select">select number of hpd   </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>

                    </select>

                        <label for="manufacturing-year">Year of Manufacturing<span>*</span></label>    
                    <select id="manufacturing-year" name='manufacturing_year'  value={user.manufacturing_year} onChange={userhandler} onKeyDown={handleKeyDown} required  >
                    <option value="select">select number of manufacturing year  </option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                    <option value="2037">2037</option>
                    <option value="2038">2038</option>
                    <option value="2039">2039</option>
                    <option value="2040">2040</option>
                    <option value="2041">2041</option>
                    <option value="2042">2042</option>
                    <option value="2043">2043</option>
                    <option value="2044">2044</option>
                    <option value="2045">2045</option>
                    <option value="2046">2046</option>
                    <option value="2047">2047</option>
                    <option value="2048">2048</option>
                    <option value="2049">2049</option>
                    <option value="2050">2050</option>
                   


                </select>



                        <label for="earthings">Number of Separate Earthings:</label>
                        <select id="earthings" name="earthings" onChange={userhandler} onKeyDown={handleKeyDown} required value={user.earthings}>
                            <option value="select">select number of earthings   </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        <label for="earth-resistance">Earth Resistance (Ohms):</label>
                        <input type="text" id="earth-resistance" name="earth_resistance"  required onChange={userhandler} onKeyDown={handleKeyDown} value={user.earth_resistance}/>

                        <label for="lightning-arrester">Lightning Arrester Details:</label>
                        <textarea id="lightning-arrester" name="lightning_arrester" rows="3" onChange={userhandler} value={user.lightning_arrester}></textarea>
                    </div>
                    <div class="form-section">
                        <h1>
                            <center>Disom</center>
                        </h1><br />
                        <label for="discom_name">Discom Name<span>*</span></label>
                        <input type="text" name="discom_name" required onChange={userhandler} value={user.discom_name}/>

                        <label for="discom_address">Disom Address<span>*</span></label>
                        <input type="text" name="discom_address" required onChange={userhandler}   value={user.discom_address}/>

                       
                    </div>

                    <p>
                    
                            We Mayur Pramod Dhokale [Vendor] &  <input type="text" class="lines" value={user.name} /> [Consumer]
                            bearing Consumer Number <input type="text" class="lines" value={user.consumer_number} disabled /> Ensured structural stability of
                            installed solar power plant and obtained requisite permissions from the concerned authority. If in
                            future, by virtue of any means due to collapsing or damage to installed solar power plant, MSEDCL
                            will not be held responsible for any loss to property or human life, if any. This is to Certified
                            above Installed Solar PV System is working properly with electrical safety & Islanding switch in
                            case of any presence of backup inverter an arrangement should be made in such way the backup
                            inverter supply should never be synchronized with solar inverter to avoid any electrical accident
                            due to back feeding. We will be held responsible for non-working of islanding mechanism and back
                            feed to the de-energized grid.
                    </p>

                    <label htmlFor="imageUpload">Signature [Vendor]</label>
                    <img src={signature} alt="Example" style={{ width: '200px', height: '150px' }} />


                    {consumerPreview && (
                        <div style={{ marginTop: "10px" }}>
                            <img
                                src={consumerPreview}
                                alt="Consumer Preview"
                                style={{ maxWidth: "150px", maxHeight: "100px", border: "1px solid #ccc" }}
                            />
                        </div>
                    )}

                    <label htmlFor="consumerUpload">Signature [Consumer]</label>
                    <input type="file" id="consumerUpload" accept="image/*" onChange={(e) => handleImageChange(e, setConsumerPreview)} />

                    <h3>
                        <center>
                            Guarantee Certificate Undertaking to be submitted by VENDOR
                        </center>
                    </h3>
                    <br />
                    <p><b>
                        The undersigned will provide the services to the consumers for repairs/maintenance of the RTS plant
                        free of cost for 5 years of the comprehensive Maintenance Contract (CMC) period from the date of
                        commissioning of the plant. Non performing/under-performing system component will be
                        replaced/repaired free of cost in the CMC period</b>
                    </p>
                    <br />

                    <div className='stampsign'>
                        <div style={{ width: '50%', float: 'left' }}>
                            <label htmlFor="imageUpload">Signature [Vendor]</label>
                            <img src={signature} alt="Example" style={{ width: '200px', height: '150px' }} />
                        </div>
                        <div style={{ float: 'right', width: '50%' }}>
                            <label>Stamp & Seal</label>
                            <img src={stamp} alt="Example" style={{ width: '200px', height: '150px' }} />
                        </div>
                    </div>
<br/><br/>
                    <div>
                        <label ><h3><center>Identity Details of Consumer</center></h3> </label>
                        <div className='inline-container'>
                            <label>Aadhar Number :</label>
                            <input type="text" class='lines' name='aadhar_number' required style={{ width: 'auto' }} onKeyDown={handleKeyDown} onChange={userhandler}  value={user.aadhar_number} />
                        </div>
                        {files.length === 0 ? (
                            <div {...getRootProps()} style={{ border: "2px dashed #ccc", margin: "0 20%", padding: " 10% 20%", borderRadius: "10px", textAlign: "center", cursor: "pointer", }} >
                                <input {...getInputProps()} />
                                <p>Drop the files here...(jpg, jpeg, png only)</p>
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
                                {files.map((file, index) => (
                                    <div key={index} style={{ margin: "10px" }}>
                                        <img src={file.preview} alt={file.name} style={{ width: "500px", height: "200px", marginLeft: '20px',objectFit:'cover' }} /> <br /><br />
                                        <button onClick={() => removeaadhar()}>Remove </button>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                    <br /><br />
                    {
                        params.id ? 
                        <div className='next'>
                        <center><button>Update</button></center>
                        </div> 
                    :
                    <div className='next'>
                        <center><button>Next Page</button></center>
                    </div>
                    }

           


            </form>
            </div>
        </>
    )
}

export default Wcr
