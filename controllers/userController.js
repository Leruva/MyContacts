const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//@desc register user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async(req,res)=>{
    const {email , password,username} = req.body;
    if(!email || !password || !username){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword : ",hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    if (user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({message: "Register the user"})
});
//@desc register user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async(req,res)=>{


    res.json({message: "login user"})
});
//@desc register user
//@route POST /api/users/current
//@access public

const currentUser = asyncHandler(async(req,res)=>{
    res.json({message: "current user"})
});

module.exports = {loginUser, registerUser, currentUser};
