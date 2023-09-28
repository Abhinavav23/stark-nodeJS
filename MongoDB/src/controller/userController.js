const User = require('../model/userModal')
const createUser = async(req, res) => {
    console.log('req.body', req.body);
    try{
        const userData = await User.create(req.body);
        res.status(201).json({status: 'success', data: userData})
    }catch(err){
        res.status(400).json({status: 'fail', error: err.message})
    }
}

module.exports = {createUser}

