let User = require('../models/FileData')
let path = require('path')

let createUser = async (req, res) => {
    try {
        
        
        const { name, consumer_number, site_location,num_modules,wattage_per_module,discom_name,discom_address,sr_pv_no ,...otherfields } = req.body;
        console.log(req.body);
        
console.log(req.files);


       
        let exist = await User.findOne({consumer_number})
        if(exist) throw 'Consumer Number already exist !'


        const newUser = new User({
            name,
            consumer_number,
            site_location,
            num_modules,
            wattage_per_module,
            total_capacity ,
            discom_address,
            discom_name,
            ...otherfields,
            sr_pv_no:null,
            aadharImage : req.files.aadharImage[0].path,
            signature : req.files.signature[0].path
        });

        // Save the new user to the database
        await newUser.save();

        // Send a success response
        res.status(201).json({
            success : true ,
            message: 'User created successfully!',
            data: newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false ,
            message: 'Error creating user',
            error: error.message
        });
    }
};


// Controller to get a user by ID
let getUserById = async (req, res) => {
    try {
        // Extract the user ID from the URL params
        const userId = req.params.id;

        // Find the user by ID
        const user = await User.findById(userId);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        // Send the user data as a response
        res.status(200).json({
            success: true,
            message: 'User found successfully!',
            data: {
                ...user.toObject(),
                aadharImage:`/uploads/${path.basename(user.aadharImage)}`,
                signature:`/uploads/${path.basename(user.signature)}`,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving user',
            error: error.message,
            success: false,
        });
    }
};

// Annexure Form Update

let annexureHandler = async (req,res)=>{

    let id = req.params.id ;

    try{

        const { mobile , email , installation_date} = req.body

        let result = await User.findByIdAndUpdate(id , { mobile , email , installation_date})

        res.send({
            success:true ,
            message : 'Annexure Form submit successfully',
            data:result
        })


    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving user',
            error: error.message,
            success: false,
        });
    }
}

let proformaAHandler = async (req,res)=>{

    let id = req.params.id ;

    try{

        const {district,connection_date} = req.body

        let result = await User.findByIdAndUpdate(id , {district,connection_date })

        res.send({
            success:true ,
            message : 'ProformaA Form submit successfully',
            data:result
        })


    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving user',
            error: error.message,
            success: false,
        });
    }
}

let selfHandler = async (req,res)=>{

    let id = req.params.id ;

    try{

        const {declaration_date,discom_name,pv_modules,sr_pv_no,total_capacity,cell_name,gst_number} = req.body

        let result = await User.findByIdAndUpdate(id , {declaration_date,pv_modules,sr_pv_no,cell_name,gst_number,total_capacity,discom_name })

        res.send({
            success:true ,
            message : 'Self Declaration Form submit successfully',
            data:result
        })


    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving user',
            error: error.message,
            success: false,
        });
    }
}

let connectionHandler = async (req,res)=>{

    let id = req.params.id ;

    try{

        const {netmeter_date,second_address,shri,disom_address} = req.body

        let result = await User.findByIdAndUpdate(id , {netmeter_date,disom_address,second_address,shri})

        res.send({
            success:true ,
            message : 'Connection Aggreement Form submit successfully',
            data:result
        })


    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving user',
            error: error.message,
            success: false,
        });
    }
}
let modelHandler = async (req,res)=>{

    let id = req.params.id ;

    try{

        const {efficiency,rupees,advance,before,after,signature} = req.body

        let result = await User.findByIdAndUpdate(id , {efficiency,rupees,advance,before,signature,after})

        res.send({
            success:true ,
            message : 'Model Aggreement Form submit successfully',
            data:result
        })


    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving user',
            error: error.message,
            success: false,
        });
    }
}

let getAllUsers = async (req,res) => {
    try {
        const user = await User.find();

        res.status(200).json({
            success: true,
            message: 'Users found successfully!',
            data: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving user',
            error: error.message,
            success: false,
        });
    }
}

let deleteUser = async (req,res) => {
    try {
        // Extract the user ID from the URL params
        const userId = req.params.id;

        // Find the user by ID
        const user = await User.findByIdAndDelete(userId);


        // Send the user data as a response
        res.status(200).json({
            success: true,
            message: 'User delete successfully!',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error delete user',
            error: error.message,
            success: false,
        });
    }
}


let updateWCR = async (req, res) => {
    let id = req.params.id;

    try {
        const { name, consumer_number, site_location, num_modules, wattage_per_module, ...otherfields } = req.body;

        // Calculate total capacity if num_modules or wattage_per_module is provided
        let updateFields = {
            ...otherfields,
            name,
            consumer_number,
            site_location,
            num_modules,
            wattage_per_module,
        };

        if (num_modules && wattage_per_module) {
            updateFields.total_capacity = num_modules * wattage_per_module;
        }

        // Add file updates if provided
        if (req.files?.aadharImage) {
            updateFields.aadharImage = req.files.aadharImage[0].path;
        }
        if (req.files?.signature) {
            updateFields.signature = req.files.signature[0].path;
        }

        let result = await User.findByIdAndUpdate(id, updateFields);

        res.send({
            success: true,
            message: 'User updated successfully!',
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error updating user',
            error: error.message,
            success: false,
        });
    }
};



module.exports = { createUser, getUserById , annexureHandler,proformaAHandler,selfHandler,connectionHandler , modelHandler , getAllUsers , deleteUser , updateWCR}