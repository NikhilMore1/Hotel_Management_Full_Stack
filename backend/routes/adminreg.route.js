// const express = require('express');
// const router = express.Router();
// const up = require('../middlewares/AdminReg_upload')
// const { Aregister, getAllAdmin } = require('../controllers/AdminReg.controller');
// router.post('/',up.single('ProfilePhoto'),Aregister);
// router.get('/',getAllAdmin);
// module.exports=router;
 
const express = require('express');
const up = require('../middlewares/AdminReg_upload');
const { aregister, getAllAdmins, loginUser } = require('../controllers/AdminReg.controller');
const router = express.Router();
router.post('/',up.single('image'),aregister);
router.get('/',getAllAdmins);
router.post('/log',loginUser)
module.exports = router;
