import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bolzrdda", userInfo);

      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p>
        Please fill out the form below or reach me directly via the contact
        info.
      </p>

      {/* Contact Info with Icons */}
      <div className="mt-5 mb-8 flex flex-col space-y-2 text-lg">
        <p>
          <strong>Phone:</strong> +91-75173xxxxxxx
        </p>
        <p>
          <strong>Email:</strong> anuragpbansod@gmail.com
        </p>
        <p>
          <strong>Location:</strong> Nagpur, Maharashtra, India
        </p>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://github.com/anurag590"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-green-500"
          >
            <FaGithub size={22} /> <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-bansod/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-blue-600"
          >
            <FaLinkedin size={22} /> <span>LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/anuragbansod8468/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-orange-500"
          >
            <SiLeetcode size={22} /> <span>LeetCode</span>
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/anuragpno0m/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-green-700"
          >
            <SiGeeksforgeeks size={22} /> <span>GFG</span>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-full max-w-md px-8 py-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold mb-4">Send Your Message</h2>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
            />
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
