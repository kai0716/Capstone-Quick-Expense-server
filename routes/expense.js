const express = require("express");
const fs = require("fs");
const router = express.Router();
router.use(express.json());
const { getExpenseList, getExpense, deleteExpense, editExpense, createNewExpense, getReceiptData, getUserExpenseList } = require("../controller/ExpenseController");

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const type = file.originalname.substr(file.originalname.indexOf('.'));
        cb(null, file.fieldname + '-' + uniqueSuffix + type)
        console.log(file, "TEST");
    }
})
const upload = multer({ storage: storage })

router.route("/")
    .get(getExpenseList)
    .post(upload.single('receipt'), createNewExpense)

router.route("/:expenseid")
    .get(getExpense)
    .delete(deleteExpense)
    .put(editExpense)

router.route("/receipt")
    .post(upload.single('receipt'), getReceiptData)

router.route("/user/:userid")
    .get(getUserExpenseList)
module.exports = router;
