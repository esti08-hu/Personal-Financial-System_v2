"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import BarLoader from "react-spinners/BarLoader";

interface User {
  firstName: string;
  lastName: string;
}

interface Transaction {
  id: string;
  date: string;
  type: string;
  amount: number;
  description: string;
}

interface Budget {
  id: string;
  userId: string;
  title: string;
  type: string;
  amount: number;
  date: string;
}

const UserDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
          router.push("/login");
          return;
        }
        // console.log({ userId });

        const response = await axios.get<{
          user: User;
          balance: number;
          transactions: Transaction[];
          budgets: Budget[];
        }>(`http://localhost:4000/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
        setBalance(response.data.balance);
        setTransactions(response.data.transactions);
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching user data:", error);
        router.push("/login");
      }
    };

    fetchUserData();
  }, [router]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-40 w-4/5">
        <BarLoader width={200} speedMultiplier={1.8} color="#00ABCD" />
      </div>
    );
  }
  const recentTransactions = transactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="userdashboard-container h-full flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col gap-4 mb-5">
          <h1 className="text-xl font-bold text-[#22577A]">
            Hello! {user.firstName} {user.lastName}
          </h1>
          <hr className="h-1 bg-gray-400 w-full" />
          <h3 className="text-[#22577A] font-bold text-lg">Overall Balance</h3>
          <p className="font-bold text-lg">{balance} ETB</p>
          <hr className="h-1 bg-gray-400 w-full" />
          <h3 className="font-bold text-lg text-[#22577A]">
            Recent Transactions
          </h3>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Transaction Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {recentTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="bg-white border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {transaction.date}
                  </th>
                  <td className="px-6 py-4">{transaction.type}</td>
                  <td className="px-6 py-4">{transaction.amount}</td>
                  <td className="px-6 py-4">{transaction.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        

      </div>
    </div>
  );
};

export default UserDashboard;
