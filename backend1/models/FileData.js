const mongoose = require('mongoose');

let userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  consumer_number: {
    type:String,
    required: true,
    minlength: [0, 'Consumer number must be at least 120characters long'],
    maxlength: [12, 'Consumer number must not exceed 12  characters'],
  },
  site_location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sanction_number: {
    type: Number,
    required: true,
    
  },
  sanctioned_capacity: {
    type: String,

    
  },
  installed_capacity: {
    type: String,

   
  },gst_number:String,
  module_make: String,
  almm_model: String,
  wattage_per_module: {
    type: String
  },  
  num_modules: String,
  total_capacity: String,
  warranty_details: String,
  inverter_make: String,
  rating: String,
  inverter_capacity: {
    type: String,
   
   
  },
  sr_no:String,
  hpd:String,
  manufacturing_year: String,
  earthings: String,
  earth_resistance: String,
  lightning_arrester: String,
  aadhar_number: {
    type: String,

  },
  mobile: {
    type: String,

  },
  charge_controller:String,
  sr_pv_no:String,
  advance:String,
  before:String,
  after:String,
  email: String,
  pv_modules:String,
  installation_date: String,
  district: String,
  connection_date: String,
  declaration_date: String,
  discom_name: String,
  discom_address: String ,
  cell_name: String,
  netmeter_date: String,
  second_address: String,
  shri: String,
  efficieny: String,
  ruppes: String,
  aadharImage: String,
  signature: String,
  advance:String,
  before:String,
  after:String
}, { timestamps: true });

let User = mongoose.model('User', userschema);

module.exports = User;
