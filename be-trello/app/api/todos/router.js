var express = require('express');
var router = express.Router();
const {getAll} = require('./controller');

router.get('/todos', getAll);

module.exports = router;
