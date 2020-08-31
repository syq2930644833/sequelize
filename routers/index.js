const AppController = require('../testController/login')
const router = require('koa-router')()
// 暴露本地ip
    .get('/Alluser',AppController.AllUser)  
    .post('/oneUser',AppController.UserById)  
    .post('/updateUserById',AppController.updateUserById)  
    .post('/insertUser',AppController.insertUser)  



module.exports = router