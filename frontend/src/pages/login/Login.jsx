const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h1 className="text-3xl font-bold text-center text-gray-600">
          LOGIN{" "}
          <span className="text-3xl font-bold text-center text-yellow-400">
            HANGOUT
          </span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-500">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-i9/2">
              <span className="text-base label-text  text-gray-500">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered w-full h-10"
            />
          </div>
          <a
            href="#"
            className=" link link-hover hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
          <a
            href="#"
            className="link link-hover  hover:text-blue-500 mt-2 inline-block"
          >
            Forgot password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
