import express from "express";
const router = express.Router()
import protectRoute from "../middleware/protectRoute.js"
import { sendMessage, getMessages } from "../Controllers/messageControllers.js";

router.post("/send/:id",protectRoute, sendMessage )

router.get("/:id",protectRoute, getMessages )

export default router