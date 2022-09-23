const express = require('express');
const knex = require('knex')(require('../knexfile'));
const router = express.Router();
const fs = require('fs');

require('dotenv').config();
function getExpenseList(req, res) {
    knex('expenses').then((data) => {
        if (data.length === 0) {
            res.status(404).json({
                status: 404,
                message: 'List is empty',
            });
        }
        res.json(data);
    });

}
function getExpense(req, res) {
    knex('expenses')
        .where({ id: req.params.expenseid })
        .then((data) => {
            if (data.length === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'no expense found with that id',
                });
            }
            res.json(data[0]);
        });

}

function createNewExpense(req, res) {

    let obj = { ...req.body, receipt: `/images/${req.file.filename}` }
    if (!req.body.expense || !req.body.amount || !req.file || !req.body.date || !req.body.category) {
        res.status(400).json({ message: `Please make sure to provide correct data` });
    }
    else {
        knex('expenses')
            .insert(obj)
            .then(() => {
                res.status(201).json({ message: `Pass` });
            });
    }

}

function editExpense(req, res) {
    if (!req.body) {
        res.status(400).json({ message: `Please make sure to provide password and username` });
    }
    else {
        let obj = { ...req.body, receipt: `/images/${req.file.filename}` }

        knex('expenses')
            .where({ id: req.params.expenseid })
            .then((data) => {

                const filePath = `${process.env.FILE_PATH}${data[0].receipt}`;
                console.log(filePath)
                fs.unlinkSync(filePath);

                knex('expenses')
                    .where({ id: req.params.expenseid })
                    .update(obj)
                    .then((data) => {
                        res.status(200).json({ message: `user update with id ${req.params.expenseid}` });
                    });
            });
    }

}

function deleteExpense(req, res) {
    knex('expenses')
        .where({ id: req.params.expenseid })
        .del()
        .then((data) => {
            console.log(data);
            res.sendStatus(204);
        });

}




module.exports = {
    getExpenseList,
    createNewExpense,
    deleteExpense,
    editExpense,
    getExpense
}