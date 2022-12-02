import mongoose from "mongoose";
import nodemon from "nodemon";

const adminSchema = mongoose.Schema({
    fName : {
        type : String,
        require : true
    },
    lName : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true 
    }
})

const adminModel = mongoose.model("User",adminSchema);

export default adminModel;