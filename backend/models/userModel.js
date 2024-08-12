const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 Characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    maxLength: [40, "Email cannot exceed 30 Characters"],
    unique: true,
    validator: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be grater than 8 characters"],
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")){
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  
})

 // Generate JWT Token
 userSchema.methods.getJWTToken = function(){
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
 }

 // Compare Password
 userSchema.methods.comparePassword = async function (enterPassword){
  return await bcrypt.compare(enterPassword, this.password);
 }
 

const User = mongoose.model("User", userSchema);

module.exports = User;
