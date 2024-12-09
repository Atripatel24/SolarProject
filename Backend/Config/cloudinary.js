const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dmplvqhgk',
    api_key: '867612519192659',
    api_secret: 'HczpGUiojOdKf_-v62B-lwGSzDw'
});

// Function to handle dynamic folder selection based on the field
const getDynamicStorage = (fieldName) => {
    let folderName = '';

    switch (fieldName) {
        case 'aadharImage':
            folderName = 'AadharImage';
            break;
        case 'signature':
            folderName = 'Signature';
            break;
    }

    return new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: folderName,
        }
    });
};

// Create a generic upload variable, using dynamic storage for each field
let upload = multer({
    storage: (req, file, cb) => {
        console.log(file);
        const storage = getDynamicStorage(file.fieldname);
        cb(null, storage);
    }
});

module.exports = { upload , cloudinary};