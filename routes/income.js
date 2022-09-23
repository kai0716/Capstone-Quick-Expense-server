const express = require("express");
const router = express.Router();
router.use(express.json());
const { getIncomeList, getIncome, createNewIncome, deleteIncome, editIncome } = require("../controller/IncomeController");

/**
 * Function to 
 * @param {function} callback
 */
function loadData(callback) {
}

/**
 * Function to
 * @param {expense object} data
 */
function saveData(data) {

}

router.route("/")
    .get(getIncomeList)
    .post(createNewIncome)

router.route("/:incomeid")
    .get(getIncome)
    .delete(deleteIncome)
    .put(editIncome)

module.exports = router;
