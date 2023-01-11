var express = require('express');
var router = express.Router();
const {getAll, create, getOne, update} = require('./controller');

router.get('/todos', getAll);
router.post('/todos', create);
router.get('/todos/:id', getOne);
router.put('/todos/:id', update);

module.exports = router;
