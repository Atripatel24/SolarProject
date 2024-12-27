const multer = require('multer');
const path = require('path');

// Multer storage configuration for local file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, 'uploads'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
