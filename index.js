
import express from "express";
import connectMongo from "./connect.js";

const app = express();
const PORT=4000;

connectMongo("mongodb://127.0.0.1:27017/jwt").then(()=>{
    console.log("Database has been connected.")
}).catch(err=>{
    console.error("Error while connecting to the Database.");
});


app.listen(PORT,()=>{
    console.log("Server has been started.");
})