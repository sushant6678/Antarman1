
import doctorImg from '../assets/images/doctor.avif'
import { Link } from "react-router-dom";

const Login = () => {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={doctorImg} alt="Image" className="w-4/5 md:w-3/4 lg:w-2/3 rounded-md" />
        </div>
        <div className="bg-white md:w-1/2 flex items-center justify-center">
          <div className="w-3/4">
            <h2 className="text-3xl mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Log In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm text-gray-600">"Don't have an account?"</p>
                <Link to='/signup'>
                <button
                  className="text-blue-500 hover:text-blue-800 font-bold text-sm ml-2"
                  type="button"
                >
                  Sign Up
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default Login;
