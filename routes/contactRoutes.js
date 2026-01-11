const express = require("express");
const router = express.Router();
const {getContacts , getContact, createContact, updateContact, deleteContact} = require("../controllers/contactController");

//get all contacts
//create contact
router.route("/").get(getContacts).post(createContact);
//get contact
//update contact
//delete contact
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;