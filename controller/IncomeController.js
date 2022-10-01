const express = require('express');
const knex = require('knex')(require('../knexfile'));
const router = express.Router();

function getIncomeList(req, res) {
    knex('incomes').then((data) => {
        if (data.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'List is empty',
            });
        }
        res.json(data);
    });

}

function getIncome(req, res) {
    knex('incomes')
        .where({ id: req.params.incomeid })
        .then((data) => {
            if (data.length === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'no income found with that id',
                });
            }
            res.json(data[0]);
        });

}

function createNewIncome(req, res) {
    console.log("running");

}

function editIncome(req, res) {
    console.log("running");

}

function deleteIncome(req, res) {
    knex('incomes')
        .where({ id: req.params.incomeid })
        .del()
        .then((data) => {
            console.log(data);
            res.sendStatus(204);
        });

}


module.exports = {
    getIncomeList,
    createNewIncome,
    deleteIncome,
    editIncome,
    getIncome
}