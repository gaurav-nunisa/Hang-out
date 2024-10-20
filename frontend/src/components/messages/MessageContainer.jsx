import MessageInput from "./MessageInput";
import MultiMessages from "./MultiMessages";
import {TiMessages} from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
export const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelectedFunc />
      ) : (
        <>
          <div className=" bg-gray-900 px-4 py-2 mb-2">
            <span className="label-text">To : </span>
            <span className="  font-bold">{selectedConversation?.fullName}</span>
          </div>
          <MultiMessages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export const NoChatSelectedFunc = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-900 font-semibold flex flex-col items-center gap-2">
        <p>Welcome to Hang out !!! <b>{authUser?.fullName}</b></p>
        <p>Select any chat to continue the conversation</p>
        <TiMessages className="text-3xl md:text-6xl"/>
        
      </div>
    </div>
  );
};
