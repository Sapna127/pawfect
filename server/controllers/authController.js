const User = require('../models/auth.model');
const jwt = require('jsonwebtoken');

async function register (req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({ user });
    } catch (err) {
        res.status(400).json({
            err: 'Email is taken'
        });
    }
};



function login  (req,res){
    const {email,password} = req.body;
    User.findOne({email},(err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup'
            });
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: 'Email and password do not match'
            });
        }
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
        res.cookie('t', token, {expire: new Date() + 9999});
        const {_id,name,email,role} = user;
        return res.json({token, user: {_id,email,name,role}});
    });
}

async function getUserPets(req, res) {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId).populate('pets', 'name'); // Populate pet details
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(user.pets);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    register,
    login,
    getUserPets
};