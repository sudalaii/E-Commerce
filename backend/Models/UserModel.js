const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    phonenumber:{type:String,require:true},
    password:{type:String,require:true},
    cpassword:{type:String,require:true},

})
const UserModel=mongoose.model("User",UserSchema)
module.exports=UserModel;