const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 3001;
const jwt = require("jsonwebtoken")
const { PythonShell } =  require("python-shell");
const api = require("./routes/api")
app.use(cors());
app.use(express.json());
let dbConnection;
let jwtSecret = "you are i am"
require("./config/dbConnection")
let {getFace ,compareFace} = require("./controllers/AdharAuthentication-controller")

// app.get("/data",getFace)



// async function insertData(id) {
//   let client; // Declare the 'client' variable outside the try block
  
//   try {
//     // MongoDB connection string with password and database details
//     const password = encodeURIComponent('NaNi....');
//     const uri=`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/?retryWrites=true&w=majority`
//     // Create a MongoDB client
//     client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     // Connect to the MongoDB server
//     await client.connect();
//     console.log('Connected to the database');
    
//     // Specify the database and collection
//     const database = client.db('micrometerid'); // Replace with your actual database name
//     const collection = database.collection('consumers'); // Replace with your actual collection name
    
//     // Insert data, including the base64-encoded image, into the collection
//     const result = await collection.insertOne({
//       microid:id
//     });
//     console.log(`Inserted document with ID: ${result.insertedId}`);
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   } finally {
//     if (client) {
//       await client.close();
//       console.log('Connection closed');
//     }
//   }
// }

// async function compareid(id) {
//   let client; // Declare the 'client' variable outside the try block

//   try {
//     // MongoDB connection string with password and database details
//     const password = encodeURIComponent('NaNi....');
//     const uri=`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/?retryWrites=true&w=majority`
    
//     // Create a MongoDB client
//     client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();
//     console.log('Connected to the database');
    
//     // Specify the database and collection
//     const database = client.db('micrometerid'); // Replace with your actual database name
//     const collection = database.collection('consumers'); // Replace with your actual collection name
    
//     // Insert data, including the base64-encoded image, into the collection
//     const result = await collection.findOne({
//       microid:id
//     });
//     console.log(`found document with ID: ${result.microid}`);
//     if(id==result.microid){
//       return "True"
//     }
//     else{
//       return "False"
//     }
//     // Connect to the MongoDB server
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   } finally {
//     if (client) {
//       await client.close();
//       console.log('Connection closed');
//     }
//   }
// }

// async function insertConsumerTransactions(name,microid,units,amount){
//   let client; // Declare the 'client' variable outside the try block

//   try {
//     // MongoDB connection string with password and database details
//     // const password = encodeURIComponent('NaNi....');
//     // const uri=`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/?retryWrites=true&w=majority`
    
//     // // Create a MongoDB client
//     // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     // await client.connect();
//     // console.log('Connected to the database');
    
//     // // Specify the database and collection
//     // const database = client.db('credentials'); // Replace with your actual database name
//     // const collection = database.collection('transactionBills'); // Replace with your actual collection name
    
//     // Insert data, including the base64-encoded image, into the collection
//     const result = await collection.insertOne({
//       "name":name,
//       "microid":microid,
//       "units":units,
//       "amount":amount
//     });


    
//     console.log(`found document with ID: ${result._id}`);
//     alert("PURCHASE SUCCESSFULL")
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   } finally {
//     if (client) {
//       await client.close();
//       console.log('Connection closed');
//     }
//   }
// }

// app.post("/api1", (req, res) => {
//   let temp = req.body.id;
//   console.log(temp)
//   insertData(temp);
//   res.json(temp)
// })
// app.post("/api2", async (req, res) => {
//   let temp = req.body.id;
//   console.log(temp)
//   userOrNot = await compareid(temp)
//   if(userOrNot){
//   const authToken = jwt.sign(temp, jwtSecret);
//   return res.json({ success: true, authToken: authToken });
//   }else{
//     res.json({success:false})
//   }
// })
// app.post("/api3", (req, res) => {
//   let name = req.body.name;
//   let microid = req.body.microid
//   let units = req.body.units
//   let amount = req.body.amount
//   insertConsumerTransactions(name,microid,units,amount)
//   // res.send("added to database suceessfully");

// })
// app.post("/api4", async (req, res) => {
//   let temp = req.body.id;
//   //const authToken = jwt.sign(temp, jwtSecret);
//   //return res.json({ success: true, authToken: authToken });
//   res.send(await findid(temp))
// })
// async function findid(id) {
//   let client; // Declare the 'client' variable outside the try block

//   try {
//     // MongoDB connection string with password and database details
//     // const password = encodeURIComponent('NaNi....');
//     // const uri=`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/?retryWrites=true&w=majority`
    
//     // // Create a MongoDB client
//     // client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     // await client.connect();
//     // console.log('Connected to the database');
    
//     // Specify the database and collection
//     const database = client.db('credentials'); // Replace with your actual database name
//     const collection = database.collection('transactionBills'); // Replace with your actual collection name
    
//     // Insert data, including the base64-encoded image, into the collection
//     const result = await collection.find({
//       microid:id
//     });
//     console.log(`found document with ID: ${result}`);
//     return result;
//     // Connect to the MongoDB server
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   } finally {
//     if (client) {
//       await client.close();
//       console.log('+Connection closed');
//     }
//   }
// }


app.use("/api",api)

// app.post('/api/aadharDatabase',compareFace);

app.listen(port,()=>{
    console.log('listening on port 3001');
})