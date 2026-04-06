"use client";

import { useState } from "react";

 function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    githubUrl: "",
    role: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded-lg shadow-md border  border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            onChange={handleChange}
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            onChange={handleChange}
          />
        </div>

        {/* GitHub URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
          <input
            type="url"
            name="githubUrl"
            placeholder="https://github.com/username"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            onChange={handleChange}
          />
        </div>
{/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-700 cursor-pointer text-white py-3 px-4 rounded-md scale-y-100 hover:scale-96 duration-200 transform font-semibold"
        >
         SUBMIT ASSESSMENT
        </button>
      </form>
    </div>
  );
}


export default RegisterForm;