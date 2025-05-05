
import User from "../models/schema.js";

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

        res.render("signup", { message: "Logged in successfully!" });

    } catch (error) {
        res.render("signup", { message: "Error occurred: " + error.message });
    }
}


export {
    registerUser,
}