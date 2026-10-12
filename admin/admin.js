var express = require ('express')
var router = express.router()

router.get('/Dashboard' ,async (req,res)=>{
    res.json({'message':'admin apis'})
})


module.exports = router