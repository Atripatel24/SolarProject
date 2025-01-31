const mongoose = require('mongoose');

let userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  consumer_number: {
    type:String,
    required: true,
    minlength: [12, 'Consumer number must be at least 12 characters long'],
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
    minlength: [8, 'Sanctioned number must be at least 8 characters long'],
    maxlength: [8, 'Sanctioned number must not exceed 8 characters'],
  },
  sanctioned_capacity: {
    type: String,
    required: true,
    minlength: [4, 'Sanctioned Capacity must be at least 4 characters long'],
    maxlength: [4, 'Sanctioned Capacity  must not exceed 4 characters'],
  },
  installed_capacity: {
    type: String,
    required: true,
    minlength: [4, 'Installed Capacity must be at least 4 characters long'],
    maxlength: [4, 'Installed Capacity  must not exceed 4 characters'],
  },
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
    required: true,
    minlength: [4, 'Inverter Capacity must be at least 4 characters long'],
    maxlength: [4, 'Inverter Capacity  must not exceed 4 characters'],
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
