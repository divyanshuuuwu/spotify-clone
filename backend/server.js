require("dotenv").config();;

const PORT = 3000;
const app = require('./src/app.js');
const connectDB = require('./src/db/db.js');
connectDB();






app.listen(PORT,()=>{
    try{
        console.log(`Server is running on port ${PORT}`)
    } catch (error) {
        console.error("Error occurred while starting the server:", error)
    }
})