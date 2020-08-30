const Todo = require('./../models/todolist.model')

const todolistController =  {

    async getAllTodolist(req, res) {
        try {
            const todolist = await Todo.find().populate('user');
            res.status(200).send(todolist);
        }
        catch (err) {
            res.status(400).json({status:400, message:err.message});
        }
    },

    async getAllTodoListById(req, res) {
        let taskid = req.params.id;

        if(!taskid) res.status(400).json({status:400, message:'Could not find task id'});
        try {
            const todolist = await Todo.findById(taskid).populate('user');
            res.status(200).send(todolist);
        }
        catch (err) {
            res.status(400).json({status:400, message:err.message});
        }
    },
}


module.exports = todolistController;

