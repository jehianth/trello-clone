const {Todo, Item} = require('../../db/models');
// client req endpoint todo, lalu respon yang dibalikin client apa
module.exports = {
    getAll : async(req, res) => {
        try {
            const result = await Todo.findAll({
                attributes: ['id', 'name'],
                //incluce = memasukan relasi   
                include: {
                    model: Item,
                    attributes: ['id','name','TodoID']
                },
            });
            res.status(200).json({
                message: 'success',
                data: result
            });
        } catch (err) {
            console.log(err);
        }
    },
    create: async(req, res) => {
        try {
            const {name} = req.body;
            const result = await Todo.create({name});
            res.status(201).json({
                message: 'success',
                data: result,
            });
        } catch (err) {
            console.log(err);
        }
    },
    getOne: async(req, res) => {
        try {
            const {id} = req.params;
            const result = await Todo.findOne({
                where: {id: id}
            });
            res.status(200).json({
                message: 'success',
                data: result,
            });
        } catch (err) {
            
        }
    }
};
