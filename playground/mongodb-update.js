//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

		// db.collection ('Todos').findOneAndUpdate({
		// 	_id: new ObjectID('58844bf3fc0f270faa7f44ad')
		// },{
		// 	$set:{
		// 		completed:true
		// 	}
		// },{
		// 	returnOriginal:false
		// }).then((result)=>{
		// 	console.log(result);
		// });

		db.collection ('Users').findOneAndUpdate({
			name:'bank'
		},{
			$set:{
				name:'wahn'
			},
			$inc:{
				age:1
			}
		},{
			returnOriginal:false
		}).then((result)=>{
			console.log(result);
		});
		

  db.close();
});
