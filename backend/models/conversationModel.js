
import mongoose from "mongoose"
const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    ]
}, {timeStamps : true})
const Coversation = mongoose.model("Conversation", conversationSchema)
export default  Coversation