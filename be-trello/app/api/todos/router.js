var express = require('express');
var router = express.Router();

router.get('/todos', function(req, res, next) {
    res.json({ message: 'Call Todos' });
});

module.exports = router;
