const userService = require('../testService/login')
const utils = require('../utils')

module.exports = {
    AllUser : async (ctx) => {
        result = await userService.findAllUser()
        console.log('result: ', result);
        return utils.getResult(ctx,result,'查询成功',1)
    },
    UserById : async (ctx) => {
        result = await userService.findUserById('h_doctor')
        console.log('result: ', result);
        return utils.getResult(ctx,result,'查询成功',1)
    },
    updateUserById : async (ctx) => {
        result = await userService.updateUserById(ctx.request.body)
        return utils.getResult(ctx,result,'查询成功',1)
    },
    insertUser : async (ctx) => {
        result = await userService.insertUser(ctx.request.body)
        return utils.getResult(ctx,result,'查询成功',1)
    }
}
