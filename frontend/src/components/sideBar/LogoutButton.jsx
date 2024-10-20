import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { logout, loading } = useLogout();

  return (
    <div className="mt-auto ">
      {!loading ? (
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout}/>
      ) : (
        <div className="loading loading-spinner"></div>
      )}
    </div>
  );
};
export default LogoutButton;
