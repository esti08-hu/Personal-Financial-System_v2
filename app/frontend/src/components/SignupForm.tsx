// import Link from "next/link";
// import Image from "next/image";
"use client";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/signup",
        formData
      );
      alert("User Registered.")
      // console.log("User registered:", response.data);
      router.push("/login")
    } catch (error: unknown) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <div className="signupformcontainer h-full flex justify-center items-center bg-[#E5E5E5]">
      <div className="container max-w-fit h-auto flex justify-center items-center gap-16 border-2 pt-10 pb-10 bg-white p-8">
        <div>
          <div>
            <div className="max-w-fit mb-8">
              <Link href="/">
                <Image
                  src="/moneymaster.png"
                  width={90}
                  height={90}
                  alt="Money Master Logo"
                />
              </Link>
            </div>
            <h1 className="text-2xl font-black text-[#22577A] mb-6">Sign Up</h1>
            <p className="w-5/6 mb-10 text-[#6C7278]">
              Fill your information below or register using your social account.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-16 flex gap-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>
            <div className="mb-16">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={type}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="shadow-sm bg-gray-50 border mb-14 border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                  required
                />
                <span
                  className=" absolute right-10 top-0 mt-2 mr-2 cursor-pointer"
                  onClick={handleToggle}
                >
                  <Icon className="absolute mr-10" icon={icon} size={25} />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="text-white hover:bg-[#37a5bb] focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center bg-[#00ABCD] font-bold border-2 h-12 w-full rounded-full"
            >
              Sign Up
            </button>
            <label className="text-center">
              <p className="mt-10">
                Already have an account?{" "}
                <span className="text-[#00ABCD] font-black underline">
                  <Link href="/login">Sign In</Link>
                </span>
              </p>
            </label>
          </form>
        </div>
        <div className="welcome-img">
          <Image
            width={500}
            height={500}
            src="/images/welcome.png"
            alt="signup-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
