var fs = require('fs');
const express = require('express');
const router = express.Router();
const connector = require('./mongo.connecter');

//on retourne tous les utilisateurs
router.get('/', (req, res) => {
    connector.db.collection("users").find({}).toArray((err, result) => {
    if (err) throw err;
    res.send(result);
    });
});

//on retourne un utilisateur par id 
router.get('/:userId', (req, res) => {
    connector.db.collection("users").findOne(req.body, (err, result) => {
    if (err) throw err;
    res.send(result);
    });
});

//on ecrit un nouvel utilisateur
router.post('/new', (req, res) => {
    connector.db.collection("users").insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.send(result);
    });
});


//on supprime utilisateur
router.delete('/:userId', (req, res) => {        
    connector.db.collection("users").deleteOne(parseInt(req.body), (err, result) => {
    if (err) throw err;    
    res.send(result);  
    });                                   
});

module.exports = router;