import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../Utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password donot match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(200).json({ error: "user already exist" });
    }
    //HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //https://avatar.iran.liara.run/public/boy
    //https://avatar.iran.liara.run/public/girl

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      confirmPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      console.log("newUser from authController.js"+ newUser);
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        password: newUser.password,
        confirmPassword: newUser.confirmPassword,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log({ error: "INTERNAL SERVER ERROR" });
    console.log(error.message);
  }
};

export const login = async(req, res) => {
 try {
  const {username, password}= req.body
  const user = await User.findOne({username});
  const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")
  if(!user && !isPasswordCorrect){
    return res.status(400).json({error:"Invalid credentials"})
  }
  generateTokenAndSetCookie(user._id, res);
  res.status(200).json({
    _id: user._id,
    fullName: user.fullName,
    username: user.username,
    password: user.password,
    confirmPassword: user.confirmPassword,
    gender: user.gender,
    profilePic: user.profilePic
  })
  
 } catch (error) {
  console.log("Error in loginController", error.message)
  
 }
};

export const logout = (req, res) => {
 try {
  res.cookie("jwt", "", {maxAge : 0})
  res.status(200).json({message : "Logged Out Successfully"})
  
  
 } catch (error) {
  console.log("Error in logoutController", error.message)
  res.status(500).json({error : error.message}) 
 }
};
