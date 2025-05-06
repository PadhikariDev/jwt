
import express from "express";
import {registerUser,showSignup,showDashboard,userLogin} from "../controllers/authControllers.js"
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/signup", showSignup);
router.post("/signup",registerUser);
router.get("/login", (req, res) => {
    res.render("login", { message: null });  // Render the login page
  });
router.post("/login",userLogin);

router.get("/dashboard",isAuthenticated, showDashboard);

export default router;