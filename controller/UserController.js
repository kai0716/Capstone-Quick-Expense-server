const express = require('express');
const knex = require('knex')(require('../knexfile'));

function getUserList(req, res) {
    knex('users').then((data) => {
        if (data.length === 0) {
            res.status(404).json({
                status: 404,
                message: 'List is empty',
            });
        }
        res.json(data);
    });

}

function getUser(req, res) {
    knex('users')
        .where({ id: req.params.userid })
        .then((data) => {
            if (data.length === 0) {
                res.status(404).json({
                    status: 404,
                    message: 'no user found with that id',
                });
            }
            console.log(data)
            res.json(data[0]);
        });


}

function createNewUser(req, res) {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ message: `Please make sure to provide password and username` });
    }
    else {
        knex('users')
            .insert(req.body)
            .then((newUserId) => {
                res.status(201).json({ message: `user created with id ${newUserId}` });
            });
    }
}

function editUser(req, res) {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({ message: `Please make sure to provide password and username` });
    }
    else {
        knex('users')
            .where({ id: req.params.userid })
            .update(req.body)
            .then((data) => {
                res.status(200).json({ message: `user update with id ${req.params.userid}` });
            });
    }

}

function deleteUser(req, res) {
    knex('users')
        .where({ id: req.params.userid })
        .then((data) => {
            if (data.length === 0) {
                knex('users')
                    .where({ id: req.params.userid })
                    .del()
                    .then((data) => {
                        console.log(data);
                        res.sendStatus(404);
                    });
            }
            else {
                console.log(data);
                res.sendStatus(204);
            }
        });

}


module.exports = {
    getUser,
    getUserList,
    createNewUser,
    deleteUser,
    editUser
}