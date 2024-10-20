import useGetConversations from "../../hooks/useGetConversations"
import Coversation from "./Conversation"
const MultiConversations = () => {
  const {loading, conversations}= useGetConversations()
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx)=>(
        <Coversation 
        key={conversation._id}
        conversation={conversation}
        lastIndx={idx === conversations.length - 1}
        />

      ))}
        {loading ? <span className="loading loading-spinner mx-auto"></span> : null }
    </div>
  )
}

export default MultiConversations