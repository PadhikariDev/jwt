import jwt from "jsonwebtoken";

export function isAuthenticated(req, res, next) {
    const token = req.cookies.authToken;

    if (!token) {
        return res.redirect("/api/login");
    }

    try {
        const decoded = jwt.verify(token, "kyler123");
        req.user = decoded; // Attach user data to request
        next();
    } catch (err) {
        return res.redirect("/api/login");
    }
}
