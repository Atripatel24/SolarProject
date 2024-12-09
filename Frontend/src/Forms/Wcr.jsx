import React, { useCallback, useState } from 'react'
import { useDropzone } from "react-dropzone";
import signature from '../assets/signature.jpeg';
import stamp from '../assets/stamp.jpeg'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';

const Wcr = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const userhandler = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const [files, setFiles] = useState([]);

    const onDrop = ((acceptedFiles) => {
        const file = acceptedFiles[0] ;

        setUser({ ...user , 'aadharImage' : file})

        setFiles((prevFiles) => [
            ...prevFiles,
            ...acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            ),
        ]);
    });

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/*",
        multiple: false,
    });

    // Remove Aadhar Image 

    const removeaadhar = () => {
        setFiles([])
    }


    const [consumerPreview, setConsumerPreview] = useState(null);

    // Preview image
    const handleImageChange = (event, setPreview) => {
        const file = event.target.files[0];
        // console.log(file)

        setUser({ ...user , 'signature' : file})
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
        console.log('user',user);

        localStorage.setItem('id',user.name)

        localStorage.getItem('id')

        localStorage.removeItem('id')
        
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
        formdata.append('warranty_details', user.warranty_details);
        formdata.append('inverter_make', user.inverter_make);
        formdata.append('rating', user.rating);
        formdata.append('inverter_capacity', user.inverter_capacity);
        formdata.append('manufacturing_year', user.manufacturing_year);
        formdata.append('earthings', user.earthings);
        formdata.append('earth_resistance', user.earth_resistance);
        formdata.append('lightning_arrester', user.lightning_arrester);
        formdata.append('aadhar_number', user.aadhar_number);

        // formdata.append('signature',user.signature);
        // formdata.append('aadharImage',user.aadharImage);


        try{

            let response = await axios.post('http://localhost:4000/api/admin/wcr' , formdata )

            if(response.data.success){
                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success"
                }).then(() => {
                    navigate('/Annexure1')
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

                    <div class="form-section">
                        <h1>
                            <center>General Information</center>
                        </h1>
                        <label for="name">Name<span>*</span></label>
                        <input type="text" name="name" required onChange={userhandler} />

                        <label for="consumer-number">Consumer Number<span>*</span></label>
                        <input type="text" name="consumer_number" required onChange={userhandler} maxLength={12} onKeyDown={handleKeyDown} />

                        <label for="site-location">Site/Location (Complete Address)<span>*</span></label>
                        <textarea id="site-location" name="site_location" rows="3" required onChange={userhandler}></textarea>

                        <label for="category">Category<span>*</span></label>
                        <select id="category" name="category" required onChange={userhandler}>
                            <option value="government">Government</option>
                            <option value="private">Private Sector</option>
                        </select>

                        <label for="sanction-number">Sanction Number</label>
                        <input type="text" id="sanction-number" maxLength={12} name="sanction_number" required onChange={userhandler} onKeyDown={handleKeyDown} />
                    </div>

                    <div class="form-section">
                        <h1>
                            <center>Solar PV System Details</center>
                        </h1>
                        <label for="sanctioned-capacity">Sanctioned Capacity (KW)</label>
                        <input type="text" id="sanctioned-capacity" maxLength={4} name="sanctioned_capacity" required onChange={userhandler} onKeyDown={handleKeyDown} />

                        <label for="installed-capacity">Installed Capacity (KW)</label>
                        <input type="text" id="installed-capacity" maxLength={4} name="installed_capacity" required onChange={userhandler} onKeyDown={handleKeyDown} />


                        <label for="module-make">Make of Module</label>
                        <input type="text" id="module-make" name="module_make" required onChange={userhandler} />

                        <label for="almm-model">ALMM Model Number</label>
                        <input type="text" id="almm-model" name="almm_model" onChange={userhandler} />

                        <label for="wattage-per-module">Wattage Per Module<span>*</span></label>
                        <input type="text" id="wattage-per-module" name="wattage_per_module" maxLength={4} required onChange={userhandler} onKeyDown={handleKeyDown} />

                        <label for="num-modules">Number of Modules<span>*</span></label>
                        <input type="key" id="num-modules" name="num_modules" required onChange={userhandler} onKeyDown={handleKeyDown} />

                        <label for="total-capacity">Total Capacity (KWP)<span>*</span></label>
                        <input type="text" id="total-capacity" name="total_capacity" required value={user.num_modules * user.wattage_per_module} onChange={userhandler} />

                        <label for="warranty-details">Warranty Details (Product + Performance)<span>*</span></label>
                        <textarea id="warranty-details" name="warranty_details" rows="3"></textarea>
                    </div>

                    <div class="form-section">
                        <h1>
                            <center>Inverter and Protection Details</center>
                        </h1>
                        <label for="inverter-make">Make & Model Number of Inverter:</label>
                        <input type="text" id="inverter-make" name="inverter_make" maxLength={15} required onChange={userhandler} />

                        <label>Rating:</label>
                        <input type="text" id="" name="rating" required onChange={userhandler} onKeyDown={handleKeyDown} />

                        <label for="charge-controller">Type of Charge Controller/MPPT:</label>
                        <input value={'Rooftop'} />
                        <br />



                        <label for="inverter-capacity">Capacity of Inverter:</label>
                        <input type="text" id="inverter-capacity" name="inverter_capacity" required onChange={userhandler} />

                        <label for="manufacturing-year">Year of Manufacturing<span>*</span></label>
                        <input type="text" id="manufacturing-year" maxLength={4} name="manufacturing_year" required onChange={userhandler} onKeyDown={handleKeyDown} />




                        <label for="earthings">Number of Separate Earthings:</label>
                        <select id="earthings" name="earthings" onChange={userhandler} onKeyDown={handleKeyDown} required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        <label for="earth-resistance">Earth Resistance (Ohms):</label>
                        <input type="text" id="earth-resistance" name="earth_resistance" required onChange={userhandler} onKeyDown={handleKeyDown} />

                        <label for="lightning-arrester">Lightning Arrester Details:</label>
                        <textarea id="lightning-arrester" name="lightning_arrester" rows="3" onChange={userhandler}></textarea>
                    </div>

                    <p>
                        <b>
                            We Mayur Pramod Dhokale [Vendor] &  <input type="text" class="lines" value={user.name} /> [Consumer]
                            bearing Consumer Number <input type="text" class="lines" value={user.consumer_number} disabled /> Ensured structural stability of
                            installed solar power plant and obtained requisite permissions from the concerned authority. If in
                            future, by virtue of any means due to collapsing or damage to installed solar power plant, MSEDCL
                            will not be held responsible for any loss to property or human life, if any. This is to Certified
                            above Installed Solar PV System is working properly with electrical safety & Islanding switch in
                            case of any presence of backup inverter an arrangement should be made in such way the backup
                            inverter supply should never be synchronized with solar inverter to avoid any electrical accident
                            due to back feeding. We will be held responsible for non-working of islanding mechanism and back
                            feed to the de-energized grid.</b>
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
                    <p><b>
                        The undersigned will provide the services to the consumers for repairs/maintenance of the RTS plant
                        free of cost for 5 years of the comprehensive Maintenance Contract (CMC) period from the date of
                        commissioning of the plant. Non performing/under-performing system component will be
                        replaced/repaired free of cost in the CMC period</b>
                    </p>
                    <hr />

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

                    <div>
                        <label style={{ marginTop: '250px' }}>Identity Details of Consumer :-</label><br />
                        <div className='inline-container'>
                            <label>Aadhar Number :</label>
                            <input type="text" class='lines' name='aadhar_number' required style={{ width: 'auto' }} onChange={userhandler} />
                        </div>
                        {files.length === 0 ? (
                            <div {...getRootProps()} style={{ border: "2px dashed #ccc", margin:"0 20%",padding: " 10% 20%", borderRadius: "10px", textAlign: "center", cursor: "pointer", }} >
                                <input {...getInputProps()} />
                                <p>Drop the files here...(jpg, jpeg, png only)</p>
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
                                {files.map((file, index) => (
                                    <div key={index} style={{ margin: "10px" }}>
                                        <img src={file.preview} alt={file.name} style={{ width: "500px", height: "200px", marginLeft: '20px' }} /> <br /><br />
                                        <button onClick={() => removeaadhar()}>Remove </button>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div> <br /><br />
                    <button>Submit <Link state={user.consumer_number}> form</Link></button>
                </div>
               
            </form>
        </>
    )
}

export default Wcr
