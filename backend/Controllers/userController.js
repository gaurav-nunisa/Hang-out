import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("error in getUsersForSidebar controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}