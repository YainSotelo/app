const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('amor te amo')
})



module.exports = router