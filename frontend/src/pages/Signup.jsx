import React from "react";
import doctorImage from '../assets/images/doctor1.webp';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-blue-30 md:w-1/2 flex items-center justify-center">
        <img src={doctorImage} alt="Image" className="w-4/5 md:w-3/4 lg:w-2/3 rounded-md" />
      </div>
      <div className="bg-white md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6">Signup</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="userType" className="block text-gray-700 text-sm font-bold mb-2">
                User Type
              </label>
              <select
                id="userType"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <select
                id="gender"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
                Upload Photo
              </label>
              <input type="file" id="photo" className="mb-2" />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Signup
              </button>
              <Link to='/login'>
              <button
                className="text-blue-500 hover:text-blue-800 font-bold text-sm"
                type="button"
              >
                Already have an account? Login
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Signup;