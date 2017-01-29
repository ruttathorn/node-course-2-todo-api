const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

 Todo.remove({}).then((result)=>{
 	console.log(result);
 });

 //Todo.findOneAndRemove
 // Todo.findByIdAndRemove

Todo.findByIdAndRemove('588d9d0fee7adbcef57f7840').then((todo)=>{
	console.log(todo);
});