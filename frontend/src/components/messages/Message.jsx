import {useAuthContext }from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ messageProps }) => {
  console.log("messageProps:", messageProps); // Add this line
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = messageProps.senderId === authUser._id;
  const formattedTime = extractTime(messageProps.createdAt);
  const profilePic = fromMe


    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {messageProps.message}
      </div>
      <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-900"}>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
