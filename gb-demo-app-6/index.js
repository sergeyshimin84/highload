// import { MongoClient } from "mongodb";
import { mongoose } from 'mongoose';

// // const client = new MongoClient('mongodb://127.0.0.1:27017');

// // async function start(){
// //   await client.connect()
// //   console.log("Connected")
// //   module.exports = client.db()
// //   const app = require('./app')
// //   app.listen(3000)
// // }

// //   start()
// const Client = new MongoClient;
// Client.connect(
//   'mongodb://127.0.0.1:27017',
//   async (error, client) => {
//     if(error) throw error

//     console.log('Connected');

//     // console.log(client);

//     const db = await client.db('my_database');
//     // db.createCollection('students');
//     const students = await db.collection('students');
//     const list = await students.find();
//     console.log(list);
//     client.close();
//   }
// );

mongoose.connect('mongodb://127.0.0.1:27017');

const studentSchema = mongoose.Schema({
  name: {
    firstName: String,
    lastName: String,
  },
  grade: Number,
});

const Student = mongoose.model('Student', studentSchema);
const sasha = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: {
    firstName: 'Sasha',
    lastName: 'Pupkin',
  },
  grade: 4.1,
});

sasha.save((err) => {
  if (err) throw err;

  console.log('Student saved');
});


