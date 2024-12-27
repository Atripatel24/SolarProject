const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); // Multer file upload middleware
let { createUser, getUserById, annexureHandler, proformaAHandler, selfHandler, connectionHandler, modelHandler, getAllUsers, deleteUser, updateWCR } = require('../controllers/fileController')

// POST request to upload files and form data
router.post('/users', upload.fields([{ name: 'aadharImage', maxCount: 1 }, { name: 'signature', maxCount: 1 }]), createUser);

router.get('/user/:id', getUserById)

router.put('/annexure/:id' , annexureHandler )
router.put('/proformaA/:id',proformaAHandler)
router.put('/selfdeclar/:id',selfHandler)
router.put('/connection/:id',connectionHandler)
router.put('/model/:id',modelHandler)
router.get('/details' , getAllUsers)
router.delete('/deleteuser/:id',deleteUser)

router.put('/edituser/:id', upload.fields([{ name: 'aadharImage', maxCount: 1 }, { name: 'signature', maxCount: 1 }]), updateWCR);


module.exports = router;
