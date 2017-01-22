//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

		//deleteMany
		// db.collection('Todos').deleteMany({text:'Walk the dog'}).then((result)=>{
		// 	console.log(result);
		// });

		// //DeleteOne
		// db.collection('Todos').deleteOne({text:'Walk the dog'}).then((result)=>{
		// 	console.log(result);
		// });

		//FinoOneAndDelete
		// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>
		// {
		// 	console.log(result);
		// });
		
		//db.collection ('Users').deleteMany({name:'Andrew'});

		db.collection ('Users').findOneAndDelete({_id:new ObjectID("587cc7aeca89b0031bb35c7d")
		}).then((results)=>{
			console.log(JSON.stringify(results,undefined, 2));
		});


  db.close();
});
