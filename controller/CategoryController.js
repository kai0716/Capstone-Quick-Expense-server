const express = require('express');
const knex = require('knex')(require('../knexfile'));
const router = express.Router();

function getCategoryList(req, res) {
    knex('category').then((data) => {
        if (data.length === 0) {
            res.status(404).json({
                status: 404,
                message: 'List is empty',
            });
        }
        res.json(data);
    });

}
function getCategory(req, res) {
    knex('category')
        .where({ id: req.params.categoryid })
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

function createNewCategory(req, res) {
    console.log("running");

}

function editCategory(req, res) {
    console.log("running");

}

function deleteCategory(req, res) {
    knex('category')
        .where({ id: req.params.categoryid })
        .del()
        .then((data) => {
            console.log(data);
            res.sendStatus(204);
        });

}




module.exports = {
    getCategoryList, getCategory, createNewCategory, deleteCategory, editCategory
}