
import mongoose, { Schema } from "mongoose";
import { type } from "os";


const userSchema = new mongoose.Schema ({
        firstName:{
            type:String,
            required:true,
            unique:true
        },
        lastName:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
});

const User = mongoose.model("User",userSchema);

export default User;