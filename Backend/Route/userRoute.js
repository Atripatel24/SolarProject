let express = require('express')
let { wcrHandler , getUser, annexureHandler, proformaHandler, declareHandler, connectionHandler, modelHandler, getAlluser, printHandler } = require('../Controller/userConterller')
let { upload } = require('../Config/cloudinary')

let router = express.Router();

router.post('/wcr', upload.single() , wcrHandler)

router.get('/getuser/:number' , getUser )

router.put('/annexure/:id' , annexureHandler)

router.put('/proforma/:id' , proformaHandler)

router.put('/declare/:id' , declareHandler)

router.put('/connection/:id' , connectionHandler)

router.put('/model/:id' , modelHandler)



router.get('/allusers' , getAlluser)

router.get('/printpage/:id' , printHandler)


module.exports = router