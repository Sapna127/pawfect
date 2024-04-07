const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI).then(()=>{
  console.log("Connected to MongoDB");
  app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
}).catch((err)=>console.log(err));

const petsSchema = new mongoose.Schema({
  category: String,
  name: String,
  age: Number,
  color: String,
})

const Pet = mongoose.model('pet', petsSchema);

app.get('/pets', async (req, res)=>{
  const pets = await Pet.find();
  res.json(pets);
})