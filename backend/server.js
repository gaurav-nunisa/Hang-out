import express from "express";
import CookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoutes.js";
import messagesRoutes from "./Routes/messageRoutes.js";
import connectToMongoDb from "./Db/connectToMongoDb.js";
import userRoutes from "./Routes/userRoutes.js";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messagesRoutes);
app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Sever Running on port ${PORT}`);
});
