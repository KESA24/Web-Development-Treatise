const mongoose = require ("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
    },
    role:{
        type:String,
        required: true,
        enum: ["admin","staff"],
        default: "staff",
    }
});

userSchema.pre("save", async function(next){
    const user = this;
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});
userSchema.statics.findByCredentials = async (email, password)=>{
    const user = await User.findOne({ email });
    if(!user){
        return{error: "Invalid login credentials"};
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        return{error: "Invalid login credentials"};
    }
    return user;
}
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({id: user._id, email: user.email, role: user.role}, "davinci");
    return token;
}

const User = mongoose.model("User", userSchema);

module.exports = User;