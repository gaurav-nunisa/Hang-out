
import Sidebar from "../../components/sideBar/Sidebar"

import { MessageContainer } from "../../components/messages/MessageContainer"
const Home = () => {
  return <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
    <Sidebar/>
    <MessageContainer/>
  </div>
}

export default Home