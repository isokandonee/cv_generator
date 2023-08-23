const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authentication");

const displayTemplate = require("../controller/usageController");

router.route("/cv").get(displayTemplate)


module.exports=router