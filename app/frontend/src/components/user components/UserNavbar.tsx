"use client";

import "flowbite";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserNavbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const handlePathChange = () => {
      setActiveLink(currentPath);
    };

    handlePathChange();
  }, [currentPath]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="navbar-container bg-[#00ABCD]">
      <nav className="bg-[#00ABCD] flex justify-center  border-gray-200 h-20 ">
        <div className="w-3/4 flex justify-between items-center">
          <Link
            href={"/user"}
            className="w-fit flex items-center text-[#22577A]"
          >
            <Image
              src="/moneymaster.png"
              width={80}
              height={80}
              alt="Money Master Logo"
            />
          </Link>

          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`${isMenuOpen ? "block" : "hidden"} md:block w-5/6`}
            id="navbar-dropdown"
          >
            <div className=" flex flex-col text-sm font-medium mt-4 border bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent text-white justify-between ">
              <div className="w-5/6 flex items-center justify-center">
                <ul className="flex justify-between w-2/3 items-center">
                  <li>
                    <Link
                      href="/user"
                      className={`block py-2 px-3 text-white md:bg-transparent md:p-0 md:dark:bg-transparent hover:text-[#22577A] ${
                        currentPath === "/user"
                          ? "border-b-4 border-[#22577A]"
                          : ""
                      }`}
                    >
                      DASHBOARD
                    </Link>
                  </li>

                  <li>
                    <div className="">
                      <button
                        id="transactionDropdownHoverButton"
                        data-dropdown-toggle="transactionDropdownHover"
                        data-dropdown-trigger="hover"
                        className={`text-white font-medium text-sm px-5 text-center inline-flex items-center uppercase py-2 md:bg-transparent md:p-0 md:dark:bg-transparent hover:text-[#22577A] ${
                          currentPath === "/user/Transaction" ||
                          currentPath === "/user/Transaction/add-transaction"
                            ? "border-b-4 border-[#22577A]"
                            : ""
                        }`}
                        type="button"
                      >
                        Transaction{" "}
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      id="transactionDropdownHover"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="transactionDropdownHoverButton"
                      >
                        <li>
                          <Link
                            href="/user/Transaction/"
                            className="block px-4 py-2 hover:bg-[#cfeaf2] text-[#22577A]"
                          >
                            Transaction List
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/user/Transaction/add-transaction"
                            className="block px-4 py-2 hover:bg-[#cfeaf2] text-[#22577A]"
                          >
                            Add Transaction
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <button
                      id="budgetDropdownHoverButton"
                      data-dropdown-toggle="budgetDropdownHover"
                      data-dropdown-trigger="hover"
                      className={`text-white font-medium text-sm px-5 text-center inline-flex items-center uppercase py-2 md:bg-transparent md:p-0 md:dark:bg-transparent hover:text-[#22577A] ${
                        currentPath === "/user/Budget/manage-budget" ||
                        currentPath === "/user/Budget/set-budget"
                          ? "border-b-4 border-[#22577A]"
                          : ""
                      }`}
                      type="button"
                    >
                      Budget{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="budgetDropdownHover"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="budgetDropdownHoverButton"
                      >
                        <li>
                          <Link
                            href="/user/Budget/manage-budget"
                            className="block px-4 py-2 hover:bg-[#cfeaf2] text-[#22577A]"
                          >
                            Manage Budget
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/user/Budget/set-budget"
                            className="block px-4 py-2 hover:bg-[#cfeaf2] text-[#22577A]"
                          >
                            Set Budget
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <button
                      id="accountDropdownHoverButton"
                      data-dropdown-toggle="accountDropdownHover"
                      data-dropdown-trigger="hover"
                      className={`text-white font-medium text-sm px-5 text-center inline-flex items-center uppercase py-2 md:bg-transparent md:p-0 md:dark:bg-transparent hover:text-[#22577A] ${
                        currentPath === "/user/Account/manage-account" ||
                        currentPath === "/user/Account/add-account"
                          ? "border-b-4 border-[#22577A]"
                          : ""
                      }`}
                      type="button"
                    >
                      Account{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="accountDropdownHover"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="accountDropdownHoverButton"
                      >
                        <li>
                          <Link
                            href="/user/Account/manage-account"
                            className="block px-4 py-2 hover:bg-[#cfeaf2] text-[#22577A]"
                          >
                            Manage Account
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/user/Account/add-account"
                            className="block px-4 py-2 hover:bg-[#cfeaf2] text-[#22577A]"
                          >
                            Add Account
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <Link
                      href="/user/Report"
                      className={`block py-2 px-3 text-white md:bg-transparent md:p-0 md:dark:bg-transparent hover:text-[#22577A] ${
                        currentPath === "/user/Report"
                          ? "border-b-4 border-[#22577A]"
                          : ""
                      }`}
                    >
                      REPORT
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex items-center a">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-white bg-transparent border-2 shadow-md px-5 py-3 rounded-md"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
