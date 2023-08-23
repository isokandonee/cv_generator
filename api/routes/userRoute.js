const express = require("express");
const router = express.Router();
const {authenticateUser,authorizeRoles}=require("../middleware/authentication")

const {
  showCurrentUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  deleteUser,
} = require("../controller/userController");


router.route("/").get(authenticateUser,authorizeRoles("admin"),getAllUsers)
router.route("/showowner").get(authenticateUser,showCurrentUser)
router.route("/updateUser").patch(authenticateUser,updateUser)
router.route("/updatePassword").patch(authenticateUser,updateUserPassword);

router.route("/:id").delete(authenticateUser,authorizeRoles("admin"),deleteUser);
router.route("/:id").get(authenticateUser,getSingleUser)


module.exports=router