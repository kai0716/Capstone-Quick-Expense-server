const express = require("express");
const router = express.Router();
router.use(express.json());
const { getCategoryList, getCategory, createNewCategory, deleteCategory, editCategory } = require("../controller/CategoryController");


router.route("/")
    .get(getCategoryList)
    .post(createNewCategory)

router.route("/:categoryid")
    .get(getCategory)
    .delete(deleteCategory)
    .put(editCategory)

module.exports = router;