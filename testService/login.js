const User = require('../models/t_user')
const db = require('../dbs')
const sequelize = require('../db')

module.exports = {
    findAllUser : async (data) => {
        return await User(sequelize).findAll({
            // raw: true,
        }).then(res =>{
            return res
        }).catch((err)=>{
            console.log('err: ', err);
        })
    },
    findUserById : async (username) => {
        return await User(sequelize).findOne({
            where:{
                username: username
            },
        }).then(res=>{
            return res
        }).catch((err)=>{
            console.log('err: ', err);
        })
    },
    updateUserById: async (data) => {
        return await User(sequelize).update(
            data,
            {
                where:{
                    id:0
                }
            }
        ).then(res =>{
            return res
        }).catch((err)=>{
            console.log('err: ', err);
        })
    },
    insertUser: async (data) => {
        console.log('data: ', data);
        return await User(sequelize).create(
            data,
        ).then(res =>{
            return res
        }).catch((err)=>{
            console.log('err: ', err);
        })
    }
}