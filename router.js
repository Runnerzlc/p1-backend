'use strict';
const express    = require('express');        
const router = express.Router();     

const User     = require('./user');

router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.post('/user', (req, res) => {
        var user = new User();      
        user.FirstName = req.body.FirstName;
        user.LastName = req.body.LastName;   
        user.Sex = req.body.Sex;
        user.Age = req.body.Age;
        user.Password = req.body.Password;
        user.save(  err => {
            if (err) {
                res.status(501).send(err);
            };
            res.status(200).json({ message: 'user created!' });
        });
        
    });

router.get('/users', (req, res) => {
        User.find((err, users) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(users);
        });
    });

router.get('/user/:id', (req, res) => {
        User.findById(req.params.user_id, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    });

router.put('/user/id', (req, res) => {
        User.findById(req.params.user_id, (err, user) => {

            if (err) {
                res.send(err);
            }
            user.FirstName = req.body.FirstName;
            user.LastName = req.body.LastName;
            bear.Sex = req.body.Sex;
            bear.Age = req.body.Age;
            user.Password = req.body.Password;
            user.save(  err => {
                if (err) {
                    res.status(501).send(err);
                };
                res.status(200).json({ message: 'user created!' });
            });

        });
    });

router.delete('/user/:idx', (req, res) => {
        User.remove({
            _id: req.params.user_id
        }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;


