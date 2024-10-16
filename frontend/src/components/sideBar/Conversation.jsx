const Coversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100">
          <img src="https://api.dicebear.com/9.x/bottts/avif" alt="user avatar"/>

          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-500">John Doe</p>
            <span className="text-xl"> O </span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};
export default Coversation;