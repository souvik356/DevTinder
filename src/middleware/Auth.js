const AdminAuth = (req,res,next)=>{
    console.log("Admin auth is getting checked");
    const token = "xyz"
    const isAdminAUthorized = token === "xyz"
    if(!isAdminAUthorized){
        res.status(401).send("unauthorized request")
    }else{
        next()
    }
}

const userAuth = (req,res,next)=>{
    const token ="souvik"
    const isUserAuthorized = token === "souvik"
    if(!isUserAuthorized) {
        res.status(401).send("Unauthorized request")
    }else{
        next()
    }
}

module.exports = { AdminAuth,userAuth }