const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost/todolist", {
useNewUrlParser: true, 
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false });

var db = mongoose.connection;


db.on('connected', function () {
  console.log("db connected")  
})

//if connection throws an error
db.on('error',function(err){
  console.log('mongoose default connection error:'+err);
  
});

//when connection is disconnected
db.on('disconnected',function(){
  console.log('mongoose default connection disconnected');
  
});

//If the node process end ,close the mongoose connection
process.on('SIGINT',function(){
  db.close(function() {
      console.log('mongoose default connection disconnected through app termination');
      process.exit(0);
  });
});