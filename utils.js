let moment = require('moment')
let crypto = require('crypto')
/**
 * APP通用返回结果方法
 * @param {*} data 
 * @param {*} msg 
 * @param {*} status 
 */
const getAppResult = (ctx, data, msg, resultCode) => {
    ctx.status = 200
    return ctx.body = {
        "data": {
            "user": data,
        },
        "message": msg ? msg : null,
        "resultCode": resultCode === 0 ? 0 : 1,
        "errorCode": null,
        "errormsg": null,
        "url": null,
        "validateFlag": false
    }
}
/**
 * APP退出登录
 * @param {*} data 
 * @param {*} msg 
 */
const AppLogout = (ctx, msg, resultCode) => {
    ctx.status = 200
    return ctx.body = {
        // "data":data,
        "message": msg ? msg : null,
        "resultCode": resultCode === 0 ? 0 : 1,
        // "errorCode": null,
        // "errormsg": null,
        // "url": null,
        // "validateFlag":false
    }
}
/**
 * 通用返回结果方法
 * @param {*} data 
 * @param {*} msg 
 * @param {*} status 
 */
const getResult = (ctx, data, msg, resultCode) => {
    ctx.status = 200
    return ctx.body = {
        "data": data,
        "message": msg ? msg : null,
        "resultCode": resultCode === 0 ? 0 : 1
    }
}

/**
 * 通用返回错误信息
 * @param {*} msg 
 * @param {*} err 
 */
const getError = (ctx, err, msg = '服务端异常') => {
    return ctx.body = {
        "data": err.toString(),
        "message": msg,
        "resultCode": 0
    }
}

/**
 * 通用账号密码错误
 * @param {*} msg 
 */
const loginError = (ctx, msg) => {
    return ctx.body = {
        // "data": null,
        "message": msg ? msg : '账号或密码错误',
        "resultCode": 0
    }
}
/**
 * 通用账号密码错误
 * @param {*} msg 
 */
const appLoginError = (ctx, msg, resultCode) => {
    return ctx.body = {
        "data": null,
        "message": msg ? msg : null,
        "resultCode": resultCode === 0 ? 0 : 1,
        "errorCode": null,
        "errormsg": null,
        "url": null,
        "validateFlag": false
    }
}

/**
 * APP扫码未登录结果方法
 * @param {*} data 
 * @param {*} msg 
 * @param {*} status 
 */
const appNotLoginScanResult = (ctx, data, msg, resultCode) => {
    ctx.status = 200
    return ctx.body = {
        "data": {
            "user": data,
        },
        "message": msg ? msg : null,
        "resultCode": resultCode === 0 ? 0 : 1,
        "errorCode": null,
        "errormsg": null,
        "url": null,
        "validateFlag": false
    }
}

/**
 * APP扫码异常结果方法
 * @param {*} data 
 * @param {*} msg 
 * @param {*} status 
 */
const appScanAbnormalResult = (ctx, msg, resultCode) => {
    ctx.status = 200
    return ctx.body = {
        "data": {},
        "message": msg ? msg : null,
        "resultCode": resultCode === 0 ? 0 : resultCode,
        "errorCode": null,
        "errormsg": null,
        "url": null,
        "validateFlag": false
    }
}
/**
 * APP扫码正常结果方法
 * @param {*} data 
 * @param {*} msg 
 * @param {*} status 
 */
const appScanNormalResult = (ctx, data, msg, resultCode) => {
    ctx.status = 200
    return ctx.body = {
        "data": data,
        "message": msg ? msg : null,
        "resultCode": resultCode === 0 ? 0 : 1,
        "errorCode": null,
        "errormsg": null,
        "url": null,
        "validateFlag": false
    }
}

/**
 * 通用密码加密方法
 * @param {*} passwd 未加密密码
 * @param {*} saltSting 盐
 */
const encryption = (passwd, saltSting) => {
    // 加密方法
    const crypto = require('crypto')
    const hash = crypto.createHash('sha1')

    const salt = new Buffer(saltSting, 'hex')
    const passby = new Buffer(passwd)

    hash.update(salt)
    hash.update(passby)
    let result = hash.digest()

    for (let i = 1; i < 1024; i++) {
        result = crypto.createHash('sha1').update(result).digest()
    }
    return result.toString('hex')

    //passwd : e74e45edca547ee6b7ee4f834aecff00a08c458d salt : 4f56a610c054c142
}

/**
 * 通用时间格式化工具
 * @param {*} data 时间数据
 */
const formatTime = (data) => {
    return moment(data).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 下划线转驼峰
 * @param {*} data 需要转换数据格式的数据
 */
const toCamel = (data) => {
    return data.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase()
    })
}

/**
 * 驼峰转下划线
 * @param {*} data 需要转换数据格式的数据
 */
const toLine = (data) => {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase()
}

/**
 * 登录数组对象通用遍历
 * @param {*} data Array/Object 
 */
const forEachData = (data) => {
    let key
    if (data instanceof Array) {
        data.forEach((item, index) => {
            item.createdAt ? item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss') : null
            item.updatedAt ? item.updatedAt = moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss') : null
            item.state == true ? item.state = 1 : item.state = 0
            item.system == true ? item.system = 1 : item.system = 0
            data[index] == null || data[index] == undefined ? data[index] = null : data[index]
            item.roleIdOne !== 4 ? item.roleIdOne = 6 : item.roleIdOne = 4
        })
    } else {
        for (key in data) {
            data[key] == null || data[key] == undefined ? data[key] = null : data[key]
        }
    }
    return data
}

/**
 * 加密时间戳
 * @param {*} encodeParam 加密相关参数{ signature : 时间戳  }
 * @return 密文
 */
const test_des = (encodeParam) => {
    try {
        let plain = encodeParam.signature
        const iv = new Buffer('87654321')
        let key = new Buffer('R1OhudOb7IbTuRQ1@dFgnThn') //R1OhudOb7IbTuRQ1@dFgnThn 是经过java解密过来转换的  唯一值  写死即可
        const cipher = crypto.createCipheriv('des-ede3-cbc', key, iv)
        cipher.setAutoPadding(true)  //default true
        let ciphertext = cipher.update(plain, 'utf8', 'base64')
        ciphertext += cipher.final('base64')
        return ciphertext
    } catch (err) {
        console.log("crypto data failed: " + err)
        return null
    }
}
/**
 * 加密身份证
 * @param {*} data 加密相关参数
 * @return 密文
 */
const encrypt = (data) => {
    try {
        var cipher = crypto.createCipheriv('aes-128-ecb', 'szxstj_stu_qrode', new Buffer(0))
        cipher.setAutoPadding(true)
        let ciphertext = cipher.update('430921201205200121', 'utf8', 'hex')
        ciphertext += cipher.final('hex')
        return ciphertext
    } catch (err) {
        console.log("crypto data failed: " + err)
        return null
    }
}

/**
 * 解密app扫码之后返回来的字符串之预防中心解密
 * @param {*} data 字符串
 * @return 解析出来的东西
 */
const decryptStringAESCDC = (data) => {
    try {
        var decipher = crypto.createDecipheriv('aes-128-cbc', 'szxstj_stu_qrode', 'szxstj_stu_54321')
        decipher.setAutoPadding(false)
        let deciphertext = decipher.update(data, 'hex', 'utf8')
        deciphertext += decipher.final('utf8')
        return JSON.parse(deciphertext.substr(0, deciphertext.length - 2))
    } catch (err) {
        console.log("crypto data failed: " + err)
        return null
    }
}

/**
 * 解密app扫码之后返回来的字符串之本地解密
 * @param {*} data 字符串
 * @return 解析出来的东西
 */
const decryptStringAESECB = (data) => {
    try {
        var decipher = crypto.createDecipheriv('AES-128-ECB', new Buffer('szxstj_stu_qrode'), Buffer.alloc(0))
        decipher.setAutoPadding(false)
        let ciphertext = decipher.update(data, 'hex', 'utf8')
        ciphertext += decipher.final('utf8')
        return ciphertext
    } catch (err) {
        console.log("crypto data failed: " + err)
        return null
    }
}

/**
 * 解密身份证
 * @param {*} data 字符串
 * @return 解析出来的东西
 */
const decrypt = (data) => {
    let decCardNo = null
    try {
        if(data.length > 18){
            decCardNo = decryptStringAESCDC(data)
            if(!decCardNo){
                decCardNo = decryptStringAESECB(data)
                if(!decCardNo){
                    // decCardNo = 
                }
            }
        }else{
            decCardNo = data
        }
        return decCardNo
    } catch (err) {
        console.log("crypto data failed: " + err)
        return null
    }
}

/**
 * 判断一个字符串是否为JSON
 * @param {*} data 
 */
const isJSON = (data) => {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str)
            if (typeof obj == 'object' && obj) {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log('error：' + str + '!!!' + e)
            return false
        }
    }
    console.log('It is not a string!')
}

/**
 * 生成word文档之前做性别,时间转换
 * @param {*} data 学生信息
 * @return data
 */
const genderTimeConversion = (data) => {
    data.forEach((item, index) => {
        item.sex == 0 ? item.sex = '女' : item.sex = '男',
            item.birthday ? item.birthday = moment(item.birthday).format('YYYY-MM-DD') : null
    })
    return data
}

/**
 * 查询下载任务之后修改时间格式,任务状态
 * @param {*} data 下载任务信息
 * @return data
 */
const ModifyTaskInfo = (data) => {
    data.forEach((item, index) => {
        item.task_create_time ? item.task_create_time = moment(item.task_create_time).format('YYYY-MM-DD HH:mm:ss') : null
        item.download_status == 0 ? item.download_status = '待生成' : item.download_status = '已生成'
    })
    return data
}

/**
 * 筛查保存更新数据之前进行数据校对 判断非空或进行类型转换
 * @param {*} data App返回的数据
 * @return screeningPlanInfo
 */
const screeningVisionVO = (data) => {
    let screeningPlanInfo = {}
    let massage = null
    if(!(JSON.stringify(data) == "{}")){
            // 是否佩戴眼镜 0-不戴镜 1-戴框架镜 2-塑形镜（隐形） 3-矫正（做过手术） 4:隐形眼镜
        if(data.glasses){
            screeningPlanInfo.glasses = Number(data.glasses)
        }else{
            massage = 'glasses参数为空'
            return massage
        }
            // 设备名 视力设备名称存入reserve1 字段
        if(data.oneDevicename){
            screeningPlanInfo.oneDevicename = data.oneDevicename
        }else{
            massage = 'oneDevicename参数为空'
            return massage
        }
            // 设备编号
        if(data.versionDeviceNo){
            screeningPlanInfo.versionDeviceNo = data.versionDeviceNo
        }else{
            massage = 'versionDeviceNo参数为空'
            return massage
        }
            // 视力未筛查原因
        if(data.visionReason){
            screeningPlanInfo.visionReason = data.visionReason
        }

            // 裸眼视力-左眼
        if(data.nakedVisionLeft){
            screeningPlanInfo.nakedVisionLeft = Number(data.nakedVisionLeft).toFixed(1)-0
        }else{
            message = 'nakedVisionLeft不能为空'
            return massage
        }

            // 裸眼视力-右眼
        if(data.nakedVisionRight){
            screeningPlanInfo.nakedVisionRight = Number(data.nakedVisionRight).toFixed(1)-0
        }else{
            message = 'nakedVisionRight不能为空'
            return massage
        }

            // 矫正视力-左眼(戴镜)
        if(data.cvaLeft){
            screeningPlanInfo.cvaLeft = parseFloat(data.cvaLeft).toFixed(1)-0
        }

            // 矫正视力-右眼(戴镜)
        if(data.cvaRight){
            screeningPlanInfo.cvaRight = parseFloat(data.cvaRight).toFixed(1)-0
        }

            // 角膜塑形镜-左眼视力
        if(data.oklNakedVisionLeft){
            screeningPlanInfo.oklNakedVisionLeft = parseFloat(data.oklNakedVisionLeft).toFixed(1)-0
        }

            // 角膜塑形镜-右眼视力
        if(data.oklNakedVisionRight){
            screeningPlanInfo.oklNakedVisionRight = parseFloat(data.oklNakedVisionRight).toFixed(1)-0
        }
    }
    return screeningPlanInfo
}

/**
 * 抽查保存更新数据之前进行数据校对 判断非空或进行类型转换
 * @param {*} data App返回的数据
 * @return spotCheckPlanInfo
 */
const getVisionVOTOSpotCheckPlanInfo = (data) => {
    let spotCheckPlanInfo = {}
    let massage = null
    if(!(JSON.stringify(data) == "{}")){
        // 是否佩戴眼镜 0-不戴镜 1-戴框架镜 2-塑形镜（隐形） 3-矫正（做过手术） 4:隐形眼镜
        spotCheckPlanInfo.glasses = Number(data.glasses)
        // 视力未筛查原因
        if(data.visionReason){
            spotCheckPlanInfo.visionReason = data.visionReason
        }
        // 设备名 视力设备名称存入reserve1 字段
        if(data.oneDevicename){
            spotCheckPlanInfo.oneDevicename = data.oneDevicename
        }
        // 设备编号
        if(data.versionDeviceNo){
            spotCheckPlanInfo.versionDeviceNo = data.versionDeviceNo
        }
        // 裸眼视力-左眼
        if(data.nakedVisionLeft){
            spotCheckPlanInfo.nakedVisionLeft = Number(data.nakedVisionLeft).toFixed(1)-0
        }

            // 裸眼视力-右眼
        if(data.nakedVisionRight){
            spotCheckPlanInfo.nakedVisionRight = Number(data.nakedVisionRight).toFixed(1)-0
        }

            // 矫正视力-左眼(戴镜)
        if(data.cvaLeft){
            spotCheckPlanInfo.cvaLeft = parseFloat(data.cvaLeft).toFixed(1)-0
        }

            // 矫正视力-右眼(戴镜)
        if(data.cvaRight){
            spotCheckPlanInfo.cvaRight = parseFloat(data.cvaRight).toFixed(1)-0
        }

        return spotCheckPlanInfo
    }
}

/**
 * 初始化筛查信息
 * @param {*} cardNo 筛查学生的身份证信息
 * @param {*} user   用户信息
 * @param {*} screeningStudentLocal 学生信息
 * @param {*} screeningPlan 筛查计划信息
 * @param {*} screeningPlanInfo 第一次筛查信息
 */
const initScreenInfo = (cardNo, user, screeningStudentLocal, screeningPlan, screeningPlanInfo) => {
    screeningPlanInfo.plan_id = screeningPlan.id
    screeningPlanInfo.plan_name = screeningPlan.plan_name
    screeningPlanInfo.school_id = screeningStudentLocal.schoolId
    screeningPlanInfo.school_name = screeningStudentLocal.schoolName
    screeningPlanInfo.grade_name = screeningStudentLocal.gradeName
    screeningPlanInfo.class_id = screeningStudentLocal.classId
    screeningPlanInfo.class_name = screeningStudentLocal.className
    screeningPlanInfo.student_card = cardNo
    screeningPlanInfo.student_name = screeningStudentLocal.studentName
    screeningPlanInfo.exam_date = moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
    screeningPlanInfo.platform = 'APP'
    screeningPlanInfo.create_user = user.id
    return screeningPlanInfo
}

/**
 * 初始化抽查信息
 * @param {*} cardNo 
 * @param {*} user 
 * @param {*} screeningStudentLocal 
 * @param {*} screeningPlan 
 * @param {*} spotCheckPlanInfo 
 */
const initSpotInfo = (cardNo,user,screeningStudentLocal,screeningPlan,spotCheckPlanInfo) => {
    spotCheckPlanInfo.plan_id = screeningPlan.id
    spotCheckPlanInfo.plan_name = screeningPlan.plan_name
    spotCheckPlanInfo.school_id = screeningStudentLocal.schoolId
    spotCheckPlanInfo.school_name = screeningStudentLocal.schoolName
    spotCheckPlanInfo.grade_name = screeningStudentLocal.gradeName
    spotCheckPlanInfo.class_id = screeningStudentLocal.classId
    spotCheckPlanInfo.class_name = screeningStudentLocal.className
    spotCheckPlanInfo.student_card = cardNo
    spotCheckPlanInfo.student_name = screeningStudentLocal.studentName
    spotCheckPlanInfo.exam_date = moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
    spotCheckPlanInfo.platform = 'APP'
    spotCheckPlanInfo.create_user = user.id
    return spotCheckPlanInfo
}

module.exports = {
    getAppResult,
    AppLogout,
    appLoginError,
    appNotLoginScanResult,
    appScanAbnormalResult,
    appScanNormalResult,
    getResult,
    getError,
    encryption,
    loginError,
    formatTime,
    forEachData,
    test_des,
    genderTimeConversion,
    ModifyTaskInfo,
    toCamel,
    toLine,
    isJSON,
    decrypt,
    encrypt,
    screeningVisionVO,
    initScreenInfo,
    getVisionVOTOSpotCheckPlanInfo,
    initSpotInfo
}