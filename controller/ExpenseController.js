const express = require('express');
const knex = require('knex')(require('../knexfile'));
const router = express.Router();
const fs = require('fs');
const { createWorker } = require('tesseract.js');

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
function getUserExpenseList(req, res) {
    knex('expenses')
        .where({ user_id: req.params.userid })
        .then((data) => {
            if (data.length === 0) {
                return res.status(404).json({
                    status: 404,
                    message: 'no expense found with that id',
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
    if (!req.body.amount || !req.file || !req.body.date || !req.body.category) {
        res.status(400).json({ message: `Please make sure to provide correct data` });
    }
    else {
        knex('expenses')
            .insert(obj)
            .then(() => {
                res.status(201).json({ message: `Create requeset pass` });
                // console.log("In RIGHT");
            });
    }

}

function editExpense(req, res) {
    if (!req.body.amount || !req.body.gst || !req.body.pst || !req.body.date || !req.body.category) {

        res.status(400).json({ message: `Please make sure to provide correct data` });

    }
    else {
        // let obj = { ...req.body, receipt: `/images/${req.file.filename}` }

        knex('expenses')
            .where({ id: req.params.expenseid })
            .update(req.body)
            .then((data) => {
                res.status(200).json(data);
            });

        // .where({ id: req.params.expenseid })
        // .then((data) => {

        //     const filePath = `${process.env.FILE_PATH}${data[0].receipt}`;
        //     console.log(filePath)
        //     fs.unlinkSync(filePath);

        //     knex('expenses')
        //         .where({ id: req.params.expenseid })
        //         .update(obj)
        //         .then((data) => {
        //             res.status(200).json({ message: `expense update with id ${req.params.expenseid}` });
        //         });
        // });
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

function getReceiptData(req, res) {
    // Tesseract.recognize(
    //     `http://localhost:5050/images/${req.file.filename}`,
    //     'eng',
    //     { logger: m => console.log(m) }
    // ).then(({ data: { text } }) => {
    //     res.send(text)
    // })

    const worker = createWorker({
        logger: m => console.log(m)
    });

    (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(`http://localhost:5050/images/${req.file.filename}`);
        res.send(text)

        const filePath = `${process.env.FILE_PATH}/images/${req.file.filename}`;
        // console.log(filePath)
        fs.unlinkSync(filePath);
        await worker.terminate();
    })();
}


module.exports = {
    getExpenseList,
    createNewExpense,
    deleteExpense,
    editExpense,
    getExpense,
    getReceiptData,
    getUserExpenseList
}