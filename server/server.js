const express = require('express');
const app = express();

app.use(express.json());

const petRoutes = require('./routes/petRoutes');
const connectDB = require('./db');

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
})

app.get('/',(req,res)=>{
  res.send('hii!')
})

//routes middleware
app.use(petRoutes);

connectDB();
