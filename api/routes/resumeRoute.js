const express=require("express")
const router=express.Router()
const {authenticateUser,authorizeRoles}=require("../middleware/authentication")

const {createResume,getAllResume,getSingleResume,deleteResume,updateResume,getAllResumeByUser}=require("../controller/resumeController")

router.route("/").post(authenticateUser,createResume).get(authenticateUser,authorizeRoles("admin"),getAllResume)
router.route("/user/all").get(authenticateUser,getAllResumeByUser)
router.route("/user/single_resume/:id").delete(authenticateUser,deleteResume).get(authenticateUser,getSingleResume).patch(authenticateUser,updateResume)


module.exports=router