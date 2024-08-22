"use client";
import { useAccountStore } from "@/src/store/accountStore";
import { useState } from "react";

const AddAccount = () => {
  const addAccount = useAccountStore((state) => state.addAccount);
  const [type, setType] = useState("Checking Account");
  const [balance, setBalance] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addAccount({ type, balance, title });
    // Clear form fields after submission
    setType("Checking Account");
    setBalance("");
    setTitle("");
  };

  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col gap-4 mb-5">
          <h1 className="text-xl font-bold text-[#22577A]">Account Form</h1>

          <hr className="h-1 bg-gray-400 w-full" />
          <div>
            <p className="text-gray-500 mt-5">
              Required fields are marked{" "}
              <span className="text-red-600 ">*</span>
            </p>
            <hr className="h-1 bg-gray-400 w-full" />
          </div>
        </div>

        <form className="max-w-lg" onSubmit={handleSubmit}>
          <div className="flex mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-lg font-md text-gray-900 dark:text-gray-800 w-40"
            >
              Title <span className="text-red-600">*</span> :
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800"
              placeholder="Enter your title"
            />
          </div>
          <div className="flex mb-5">
            <label
              htmlFor="type"
              className="block mb-2 text-lg text-gray-900 dark:text-gray-800 w-40"
            >
              Type :
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800"
            >
              <option>Checking Account</option>
              <option>Savings Account</option>
              <option>Trust Account</option>
              <option>Business Account</option>
            </select>
          </div>
          <div className="mb-5 flex items-center">
            <label
              htmlFor="balance"
              className="block mb-2 text-lg text-gray-900 dark:text-gray-800 w-40 "
            >
              Balance <span className="text-red-600">*</span> :
            </label>
            <input
              type="text"
              id="balance"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800"
              placeholder="Enter balance"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white border-2 shadow-md bg-[#00ABCD] hover:bg-[#4bbed5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:w-auto px-20 py-2.5 text-center mt-10 ml-32"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
