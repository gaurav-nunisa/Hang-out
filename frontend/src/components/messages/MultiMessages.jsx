import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages ";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useRef, useEffect } from "react";
import { useListenMessages } from "../../hooks/useListenMessages";

const MultiMessages = () => {
  useListenMessages()
  const lastMessageRef = useRef();
  const { loading, messages } = useGetMessages();
  console.log("messages:", messages);
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);
  console.log("messages lenght from multMessages", messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
    
      {!loading &&
        messages.length > 0 &&
        
        
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message messageProps={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a Message to start a conversation</p>
      )}
    </div>
  );
};

export default MultiMessages;
