const mongoose = require('mongoose');
const { Todo } = require('../models/todolist.model');
const {  User } = require('../models/user.model');


async function seedTodos() {
  
  const todos = [
    { title: 'meeting with JK', description: 'Disccus on graphs', status:"complete" },
    { title: 'meeting with jonas', description: 'Disccus on graphs', status:"incomplete"},
  ];

  for (todo of todos) {
    var newTodo = new Todo(todo);
    await newTodo.save();
  }

  const a = await Todo.find();
  console.log('Todos: ', a);
}

async function seedUsers() {

  const jkTodo = await Todo.findOne({ title: 'meeting with JK' });
  const jonasTdo = await Todo.findOne({ title: 'meeting with jonas' });

  let Richard = new User({ userName: 'Richard', email: 'Richard@gmail.com', todo: jkTodo._id });
  let jonas = new User({ userName: 'jonas', email: 'jonas@gmail.com', todo: jonasTdo._id });

  await Richard.save();
  await jonas.save();
 
  jkTodo.user.push(Richard);
  jonasTdo.user.push(jonas);

  await jkTodo.save();
  await jonasTdo.save();
}

seedTodos();
seedUsers();