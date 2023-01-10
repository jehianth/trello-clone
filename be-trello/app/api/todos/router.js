var express = require('express');
var router = express.Router();
const {getAll, create} = require('./controller');

router.get('/todos', getAll);
router.post('/todos', create);

module.exports = router;
