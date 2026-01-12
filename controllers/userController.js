//@desc register user
//@route POST /api/users/register
//@access public

const registerUser = ((req,res)=>{
    res.json({message: "Register the user"})
});
//@desc register user
//@route POST /api/users/login
//@access public

const loginUser = ((req,res)=>{
    res.json({message: "login user"})
});
//@desc register user
//@route POST /api/users/current
//@access public

const currentUser = ((req,res)=>{
    res.json({message: "current user"})
});

module.exports = {loginUser, registerUser, currentUser};
