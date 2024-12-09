let mongoose = require('mongoose')

let userschema = mongoose.Schema({
   
    name: String ,
    consumer_number : String ,
    site_location : String ,
    category : String ,
    sanction_number : String ,
    sanctioned_capacity : String,
    installed_capacity : String ,
    module_make : String ,
    almm_model : String ,
    wattage_per_module : String ,
    num_module : String ,
    total_capacity : String ,
    warrantly_details : String ,
    inverter_make : String ,
    rating : String ,
    inverter_capacity : String ,
    manufacturing_year : String ,
    earthings : String ,
    earth_resistance : String ,
    lightning_arrester : String ,
    aadhar_number : String ,
    mobile : String ,
    email : String ,
    installation_date : String ,
    district : String ,
    connection_date : String ,
    declaration_date : String ,
    discom : String ,
    cell_name : String ,
    netmeter_date : String ,
    second_address : String ,
    shri : String ,
    efficieny : String ,
    ruppes : String,
    aadharImage : String ,
    signature : String ,



},{timestamps : true})

let user = mongoose.model('users',userschema)

module.exports = user