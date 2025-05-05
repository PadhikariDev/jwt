
import mongoose from "mongoose";

async function connectMongo(url){
    mongoose.connect(url);
}

export default connectMongo;

