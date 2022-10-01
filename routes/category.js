const express = require("express");
const router = express.Router();
router.use(express.json());
const { getCategoryList, getCategory, createNewCategory, deleteCategory, editCategory, getUserCategoryList } = require("../controller/CategoryController");


router.route("/")
    .get(getCategoryList)
    .post(createNewCategory)

router.route("/:categoryid")
    .get(getCategory)
    .delete(deleteCategory)
    .put(editCategory)

router.route("/user/:userid")
    .get(getUserCategoryList)
module.exports = router;