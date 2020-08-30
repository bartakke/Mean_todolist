const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})



const Todo= mongoose.model('todo',todoSchema);

module.exports = Todo;