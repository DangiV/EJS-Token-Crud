import jsonwebtoken from 'jsonwebtoken'

export const createToken = (id) =>{
    const token= jsonwebtoken.sign(id.toString(),process.env.SECRETE_KEY)
    console.log("Your login token is = "+token);
    return token;
}

export const authToken = (req,res,next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(token == null){
        res.status(403).json("Person is unauthrized")
    }
    jsonwebtoken.verify(token,process.env.SECRETE_KEY,(error,User)=>{
        if(error){
            res.status(403).json("you are not unauthrized")
        }
        else{
            req.User = User
            next();
        }
    })
}