import { createToken } from "../auth.js";
import adminModel from "../Model/adminModel.js";


//User Register controllwer 

    export const Register = async (req,res) => {
        const {fName, lName, email, password} = req.body


        try {
            const avilable = await adminModel.findOne({email :email})
            if(avilable){
                res.status(400).json("User email already exits");
            }
            else{
                const UserDetails = await adminModel.create({fName : fName , lName :lName , email: email , password : password})
                res.status(200).json(UserDetails)
            }
        } catch (error) {
            console.log(error)
        }
    }

//User Login controller 

    export const Login = async (req,res) =>{
        const {email , password} = req.body
        
        try {
            const valid = await adminModel.findOne({email : email , password: password})
            if(valid){
                createToken(valid.id)
                res.status(200).json("User Login successfully")
            }
            else{
                res.status(400).json("Invalid user email or password")
                console.log(valid);

            }
        } catch (error) {
            
        }
    }



//User data delete from database controller

    export const DeleteUser = async (req,res) =>{
    const {id} = req.params
    try {
        const userDelete = await adminModel.findByIdAndDelete({_id:id})
       res.redirect('/alluser');
        res.status(200).json("User data deleted successfully");


        } catch (error) {
        console.log(error);
    } 

    }


    