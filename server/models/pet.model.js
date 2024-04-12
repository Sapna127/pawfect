const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  age: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  }
},{
    timestamps: true
    
});

module.exports = mongoose.model('Pet', petSchema);
