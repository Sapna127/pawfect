// db.js
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/pets', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Connection failed:', error.message);
    }
}



module.exports = connectDB;

