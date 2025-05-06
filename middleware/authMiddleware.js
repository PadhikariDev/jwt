

export function isAuthenticated(req,res,next){
    if(req.cookies?.userEmail){
        next();
    } else{
        res.redirect("/signup");
    }
}