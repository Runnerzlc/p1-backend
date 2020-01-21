'use strict';
const express  = require('express');        
const router = express.Router();     
const cors = require("cors");

const User = require('./user');

router.all("*", cors());

router.get('/', (req, res) => {
    res.json({ message: 'server working' });   
});
//create user
router.post('/user', (req, res) => {
        var user = new User();      
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;   
        user.gender = req.body.gender;
        user.age = req.body.age;
        user.password = req.body.password;
        user.save(  err => {
            if (err) {
                res.status(501).send(err);
            };
            res.status(200).json({ message: 'user created!' });
        });
        
    });
// get all users
router.get('/users', (req, res) => {
        User.find((err, users) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(users);
        });
        console.log("request get all users");
    });

router.get('/user/:id', (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
        console.log("get one user");
    });
//edit user
router.put('/user/:id', (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err);
            }
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;   
            user.gender = req.body.gender;
            user.age = req.body.age;
            user.password = req.body.password;
            user.save(  err => {
                if (err) {
                    res.status(501).send(err);
                };
                res.status(200).json({ message: 'user edit!' });
            });

        });
        console.log("request edit user")
    });
//delete user
router.delete('/user/:id', (req, res) => {
        //let id = req.params._id
        User.deleteOne({
            _id: req.params.id, 
        }, (err, user) => {
            if (err) {
                res.send(err);
            }
            // else{
            //     res.json(user)
            // }
            //else is for test
            res.json({ message: 'Successfully deleted' });
            
        });
        console.log("request delete user")
    });

module.exports = router;


