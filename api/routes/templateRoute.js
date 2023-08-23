const express = require("express");
const router = express.Router();
const {authenticateUser,authorizeRoles}=require("../middleware/authentication")

const {
  getAllTemplate,
  getSingleTemplate,
  deleteTemplate,
  createTempelate,
  updateTemplate,
} = require("../controller/templateController");

router.route("/").get(getAllTemplate).post(authenticateUser,authorizeRoles("admin"),createTempelate);
router
  .route("/:id")
  .get(authenticateUser,getSingleTemplate)
  .patch(authenticateUser,authorizeRoles("admin"),updateTemplate)
  .delete(authenticateUser,authorizeRoles("admin"),deleteTemplate);

module.exports = router;
