import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    UserId: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    password:{type:String, require:true}
})
export const User= mongoose.model("Users",userSchema);