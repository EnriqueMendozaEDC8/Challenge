const express=require('express');

const obtainClients = require('./obtainClients');
const obtainClient = require('./obtainClient');

const router = express.Router()

router.get('/creaditCard/clients', obtainClients);
router.get('/creaditCard/client/:id', obtainClient);

module.exports = router;
