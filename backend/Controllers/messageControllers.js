import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, recieverId],
      },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId: senderId,
      recieverId: recieverId,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    Promise.all([conversation.save(), newMessage.save()]);

    const recieverSocketId = getReceiverSocketId(recieverId)
    if(recieverSocketId){
      io.to(recieverSocketId).emit("newMessage", newMessage);
    }

    res
      .status(200)
      .json({ conversationId: conversation._id, message: newMessage });
  } catch (error) {
    console.log("error in sendmessage controller :", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("messages");

    if(!conversation){
      return res.status(200).json({messages : []})
    }
    const messages = conversation.messages
    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getmessage controller :", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
