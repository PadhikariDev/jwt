
import express from "express";
import User from "../models/schema.js";
import {registerUser,showSignup} from "../controllers/authControllers.js"

const router = express.Router();

router.get("/signup", showSignup);
router.post("/signup",registerUser);

export default router;