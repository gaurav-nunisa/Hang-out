import MultiConversations from "./MultiConversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 flex flex-col">
      {" "}
      <SearchInput/>
      <div className="divider px-3"></div>
      <MultiConversations/>
      <LogoutButton/>
    </div>

  );
};
export default Sidebar;
