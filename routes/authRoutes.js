
import express from "express";
import {registerUser,showSignup,showDashboard} from "../controllers/authControllers.js"
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/signup", showSignup);
router.post("/signup",registerUser);

router.get("/dashboard",isAuthenticated, showDashboard);

export default router;