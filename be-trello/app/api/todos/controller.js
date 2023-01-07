const {Todo} = require('../../db/models');
// client req endpoint todo, lalu respon yang dibalikin client apa
module.exports = {
    getAll : async(req, res) => {
        try {
            const result = await Todo.findAll({
                attributes: ['id', 'name']
            });
            res.status(200).json({
                message: 'success',
                data: result
            });
        } catch (err) {
            console.log(err);
        }
    },
};
