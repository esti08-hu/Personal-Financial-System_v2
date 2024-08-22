import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 172, 205, 0.25)" }}
      className="footer-container bg-[#00ABCD] w-full mt-20 flex justify-center flex-col items-center"
    >
      <div className="container">
        <table className="w-full border-collapse">
          <thead className="border-b-4 rounded-lg border-[#dbdee0]">
            <tr>
              <th className="px-4 py-2 w-1/3 flex items-center">
                <Image
                  src="/moneymaster.png"
                  width={80}
                  height={80}
                  alt="Money Master Logo"/>
                <p className="font-bold text-[#22577A]">MoneyMaster</p>
              </th>
              <th className="px-4 py-2 font-bold text-lg text-[#22577A]">
                Navigation
              </th>
              <th className="px-4 py-2 font-bold text-lg text-[#00ABCD]">
                Contact
              </th>
              <th className="px-4 py-2 font-bold text-lg text-[#00ABCD]">
                Get the latest Information
              </th>
            </tr>
          </thead>
          <tbody className="text-[#857E7E]">
            <tr>
              <td className="px-4 py-2">
                Physiological respiration involves the mechanisms that ensure
                that the composition of the functional
              </td>
              <td className="px-4 py-2">
                <ul className="list-disc pl-6">
                  <li>Home</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>FAQs</li>
                </ul>
              </td>
              <td className="px-4 py-2">
                <ul className="list-disc pl-6">
                  <li>+(406) 555-0120</li>
                  <li>+(480) 555-0103</li>
                  <li>thuhang.nute@gmail.com</li>
                  <li>Abstergo Ltd.</li>
                </ul>
              </td>
              <td className="px-4 py-2 relative">
                <div className="flex items-center border bg-white rounded-full pl-4">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full focus:ring-blue-500 appearance-none focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="ml-2 text-gray-500 p-4 bg-[#22577A] hover:text-gray-700 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
                  >
                    <Image
                      src="/images/send.png"
                      width={40}
                      height={40}
                      alt="send imag"
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-10 mb-5">
          <ul className="flex justify-end gap-6">
            <li>
              <a href={"/"}>
                <Image
                  src="/images/facebook.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href={"/"}>
                <Image src="/images/github.png" width={40} height={40} alt="" />
              </a>
            </li>
            <li>
              <a href={"/"}>
                <Image
                  src="/images/twitter.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href={"/"}>
                <Image
                  src="/images/linkedin.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-transparent dark:bg-gray-800 pb-5 pt-5 w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <span className="hover:underline">Estio</span>. All Rights
            Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <span>User Terms & Conditions </span>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <span> Privacy & Policy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
