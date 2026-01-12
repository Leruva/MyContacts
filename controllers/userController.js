const asyncHandler = require("express-async-handler");

//@desc register user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async(req,res)=>{
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
