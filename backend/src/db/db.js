const mongoose = require("mongoose");


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to the database successfully")}

        catch (error) {
            console.error("Error occurred while connecting to the database:", error)
        }
    
}

module.exports = connectDB;

