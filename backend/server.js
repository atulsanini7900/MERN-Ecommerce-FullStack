const app=require("./app")
const dotenv=require("dotenv")
const connectDatabase = require("./config/database")
//Config
dotenv.config({path:"backend/config/config.env"})

//Connecting to database
connectDatabase()

const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
    
})

//Unhandle Promise Rejection
process.on("uncaughtException", (err)=>{
    console.log(`Error ${err.message}`);
    console.log("Shutting down the server due to Promise Rejection Error");

    server.close(()=>{
        process.exit(1)
    })
    
    
})

// Unhandle Server error

process.on("unhandledRejection", (err)=>{
    console.log("Error", err.message );
    console.log("Shutting down the server due to unhandle promise Rejection");

    
    server.close(()=>{
        process.exit(1)
    })
})