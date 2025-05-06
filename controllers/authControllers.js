
import User from "../models/schema.js";
import { generateToken } from "../utils/jwtTokenGen.js";

export const showSignup = (req, res) => {
    res.render("signup", { message: null });
  };

async function registerUser(req,res) {
    try {
        const { firstName,lastName,email,password}=req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.render("signup", { message: "User already exists with this email." });

        }

        const newUser = new User({firstName,lastName,email,password});
        await newUser.save();

       

        res.redirect("/api/login");

    } catch (error) {
        res.render("signup", { message: "Error occurred: " + error.message });
    }
}

export const showDashboard = (req, res) => {
    const userEmail = req.user.email; // from decoded JWT
    res.render("dashboard", { email: userEmail });
};
export const userLogin =async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.render("login", { message: "Invalid credentials" });
        }
        if(!user || user.password != password){
            return res.render("login",{message:"invalid credential"});
        }

        res.clearCookie("authToken");
        const token = generateToken({userId:user._id , email:user.email});
        res.cookie("authToken", token, {
            httpOnly: true,  // Can't be accessed by JavaScript
            secure: process.env.NODE_ENV === 'production',  // Only set for HTTPS in production
            sameSite: 'Strict',  // Helps prevent CSRF attacks
            maxAge: 3600000  // 1 hour (in milliseconds)
        });

        res.redirect("/api/dashboard");
    } catch (error) {
        res.render("login", { message: "Login failed: " + error.message });
    }
  }


export {
    registerUser,
}