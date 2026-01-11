//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
}

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res)=>{
    res.status(200).json({message: `Get contact for id ${req.param.id}`});
}

//@desc Create contact
//@route GET /api/contacts
//@access public
const createContact = (req,res)=>{
    res.status(200).json({message: "Create new contact"});
}

//@desc Update contact
//@route GET /api/contacts/:id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message: "Update contact"});
}

//@desc Delete contact
//@route GET /api/contacts/:id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message: "Delele contact"});
}

module.exports = {getContacts , getContact, createContact, updateContact, deleteContact};