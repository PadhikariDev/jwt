
import express from "express";
import connectMongo from "./connect.js";
import authRoutes from "./routes/authRoutes.js"
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT=4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS and middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

//middleware
app.use(express.json());

app.use("/api",authRoutes);


connectMongo("mongodb://127.0.0.1:27017/jwt").then(()=>{
    console.log("Database has been connected.")
}).catch(err=>{
    console.error("Error while connecting to the Database.");
});


app.listen(PORT,()=>{
    console.log("Server has been started.");
})