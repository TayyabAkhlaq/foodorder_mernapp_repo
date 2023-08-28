const express = require('express')

const app = express()
const port = 5000
const dbFunction = require('./db.js');
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use((req,res,next)=>
{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(express.json());
app.use('/api',require('./routes/createuser'));
app.use('/api',require('./routes/displaydata.js'));
dbFunction();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const express = require('express');
// const cors = require('cors'); // Import the cors package

// const app = express();
// const port = 5000; // Replace this with your desired backend port

// // Enable CORS for a specific origin (e.g., http://localhost:3000)
// app.use(cors({
//   origin: 'http://localhost:3000'
// }));

// // Your other routes and middleware go here

// app.use(express.json());
// app.use('/api',require('./routes/createuser'));
// dbFunction();

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
