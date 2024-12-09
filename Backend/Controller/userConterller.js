let users = require('../Model/useModel')

let wcrHandler = async (req,res) => {

    console.log(req.body);

    try{

        let { name ,
            consumer_number ,
            site_location ,
            category ,
            sanction_number,
            sanctioned_capacity,
            installed_capacity,
            module_make,
            almm_model,
            wattage_per_module,
            num_modules,
            total_capacity ,
            inverter_make,
            rating ,
            inverter_capacity,
            manufacturing_year,
            earthings,
            earth_resistance,
            lightning_arrester,
            aadhar_number
        } = req.body

        // let { signature , aadharImage } = req.file

        //  let exist = await users.findOne({ consumer_number })
        // if (exist) throw 'user already exist !'

        let user = new users({
            name ,
            consumer_number ,
            site_location ,
            category ,
            sanction_number,
            sanctioned_capacity,
            installed_capacity,
            module_make,
            almm_model,
            wattage_per_module,
            num_modules,
            total_capacity : num_modules*wattage_per_module ,
            inverter_make,
            rating ,
            inverter_capacity,
            manufacturing_year,
            earthings,
            earth_resistance,
            lightning_arrester,
            aadhar_number,

            mobile :'' ,
            email : '' , 
            installation_date : '' ,
            district : '' , 
            connection_date : '' ,
            declaration_date : '' , 
            discom  : '', 
            cell_name : '' , 
            gst_number : '' ,
            shri : '', 
            second_address : '' , 
            netmeter_date :'',
            efficiency : '', 
            rupees : ''

            // signature : signature.path ,
            // aadharImage : aadharImage.path  
        })

        let result = await user.save();

        if (!result) throw 'Database Error'

        res.send({
            success: true,
            message: 'WCR form fill up successfully',
            data : result ,
        })


    }catch (err) {
        res.send({ success : false , message : err})
    }

}


let getUser = async (req,res) => {

    let  consumer_number  = req.params.number ;
    // console.log(consumer_number);
    try{
        let result = await users.findOne({ consumer_number })
        
        if(!result) throw 'consumer number not found '

        res.send({
            success : true ,
            message : 'consumer number get successfully' ,
            data : result 
        })

    }catch(err){
        res.send({ success : false , message : err })
    }
}

let annexureHandler = async (req,res) => {

    let  id  = req.params.id ;
    // console.log(consumer_number);
    try{

        let { mobile , email , installation_date} = req.body

        let result = await users.findByIdAndUpdate( id , {mobile,email , installation_date}  )
        

        res.send({
            success : true ,
            message : 'data add successfully' ,
            data : result 
        })

    }catch(err){
        res.send({ success : false , message : err })
    }

}

let proformaHandler = async (req ,res) => {

    let  id  = req.params.id ;
    // console.log(consumer_number);
    try{

        let {  district , connection_date} = req.body

        let result = await users.findByIdAndUpdate( id , {district , connection_date}  )
        

        res.send({
            success : true ,
            message : 'data add successfully' ,
            data : result 
        })

    }catch(err){
        res.send({ success : false , message : err })
    }

}

let declareHandler = async (req ,res) => {

    let  id  = req.params.id ;
    // console.log(consumer_number);
    try{

        let {  declaration_date , discom , cell_name , gst_number} = req.body

        let result = await users.findByIdAndUpdate( id , {declaration_date , discom , cell_name , gst_number}  )
        

        res.send({
            success : true ,
            message : 'data add successfully' ,
            data : result 
        })

    }catch(err){
        res.send({ success : false , message : err })
    }

}

let connectionHandler = async (req ,res) => {

    let  id  = req.params.id ;
    // console.log(consumer_number);
    try{

        let { shri , second_address , netmeter_date} = req.body

        let result = await users.findByIdAndUpdate( id , {shri , second_address , netmeter_date}  )
        

        res.send({
            success : true ,
            message : 'data add successfully' ,
            data : result 
        })

    }catch(err){
        res.send({ success : false , message : err })
    }

}

let modelHandler = async (req ,res) => {

    let  id  = req.params.id ;
    // console.log(consumer_number);
    try{

        let { efficiency , rupees } = req.body

        let result = await users.findByIdAndUpdate( id , {efficiency , rupees }  )
        

        res.send({
            success : true ,
            message : 'data add successfully' ,
            data : result 
        })

    }catch(err){
        res.send({ success : false , message : err })
    }

}


let getAlluser = async (req,res) => {
    try{
        let result = await users.find()
        
        if(!result) throw 'data not found '

        res.send({
            success : true ,
            message : 'data get successfully' ,
            data : result 
        })

    }catch(err){
        res.send({ success : false , message : err })
    }
}


let printHandler = async (req,res) => {
    let id = req.params.id
    // console.log(id);
    try{

        let result = await users.find({ _id : id })
        
        if(!result) throw 'data not found '

        res.send({
            success : true ,
            message : 'data get successfully' ,
            data : result 
        })

    }catch(err){
        res.send({ success : false , message : err })
    }
}


module.exports = { wcrHandler , getUser , annexureHandler , proformaHandler , declareHandler , connectionHandler , modelHandler , getAlluser , printHandler}