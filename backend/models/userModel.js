import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: {
    type: "String",
    required: true,
  },
  username: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
    minlength: 6,
  },
  confirmPassword: {
    type: "String",
    required: true,
    minlength: 6,
  },
  gender: {
    type: "String",
    required: true,
    enum: [
      "male",
      "female",
      "weirdo",
      "gay but not commited ",
      "gay but subscribed to onlyfans",
      "Attack Helicopter",
      "others",
    ],
  },
  profilePic: {
    type: "String",
    
  },
}, {timestamps : true});
const User = mongoose.model("User", userSchema);
export default User;
