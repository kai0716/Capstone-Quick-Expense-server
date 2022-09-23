const express = require("express");
const router = express.Router();
router.use(express.json());
const { getUserList, getUser, createNewUser, deleteUser, editUser } = require("../controller/UserController");


router.route("/")
    .get(getUserList)
    .post(createNewUser)

router.route("/:userid")
    .get(getUser)
    .delete(deleteUser)
    .put(editUser)

module.exports = router;