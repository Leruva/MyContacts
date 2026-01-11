const express = require("express");
const router = express.Router();
const {getContacts , getContact, createContact, updateContact, deleteContact} = require("../controllers/contactController");

//get all contacts
router.route("/").get(getContacts);

//create contact
router.route("/").post(createContact);

//get contact
router.route("/:id").get(getContact);

//update contact
router.route("/:id").put(updateContact);

//delete contact
router.route("/:id").delete(deleteContact);

module.exports = router;