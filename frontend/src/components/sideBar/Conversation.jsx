import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
const Coversation = ({ conversation, lastIndx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-500">{conversation.fullName}</p>
            <span className="text-xl"> O </span>
          </div>
        </div>
      </div>
      {!lastIndx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Coversation;
