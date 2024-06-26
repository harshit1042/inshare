require('dotenv').config();
const mongoose = require("mongoose")


function connectDB() {
    // Database connection
    mongoose.connect(
        process.env.MONGO_CONNECTION_URL,
    ).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
    });

}

module.exports = connectDB;
