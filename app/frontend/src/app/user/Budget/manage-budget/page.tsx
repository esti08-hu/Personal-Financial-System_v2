"use client";

import { useEffect, useState } from "react";
import "flowbite";
import { useRouter } from "next/navigation";
import { useBudgetStore } from "@/src/store/budgetStore";
import BarLoader from "react-spinners/BarLoader";

import Link from "next/link";
import Model from "./Model";


type Budget = {
  id: string;
  userId: string;
  date: string;
  type: string;
  amount: string;
  title: string;
};

const Budget = () => {
  const {
    budget,
    fetchBudget,
    editBudget,
    deleteBudget,
  } = useBudgetStore();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editBudgetData, setEditBudgetData] = useState<
    Partial<Budget>
  >({
    id: "",
    date: "",
    type: "",
    amount: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchBudget();
      setIsLoading(false);
    };

    fetchData();
  }, [fetchBudget]);

  const handleEdit = (budget: Budget) => {
    setIsEditing(true);
    setEditBudgetData(budget);
  };

  const handleDelete = async (id: string) => {
    await deleteBudget(id);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    await editBudget(editBudgetData as Budget);
    setIsEditing(false);
    setEditBudgetData({
      id: "",
      date: "",
      type: "",
      amount: "",
      title: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditBudgetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40 w-4/5">
        <BarLoader width={200} speedMultiplier={1.8} color="#00ABCD" />
      </div>
    );
  }

  if (!budget?.length) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-2xl font-semibold text-gray-600">
          You have no Budgets. Please <Link href="/user/Budget/set-budget"><span className="text-[#00ABCD]">set your Budget here.</span></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="userdashboard-container h-full flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col gap-4 mb-5">
          <h1 className="text-xl font-bold text-[#22577A]">Budget List</h1>
          <hr className="h-1 bg-gray-400 w-full" />
        </div>
        <div className="relative overflow-x-auto h-2/3 overflow-y-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Budget Date
                </th>
                <th scope="col" className="px-6 py-3 text-center ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {budget.map((budget) => (
                <tr
                  key={budget.id}
                  className="bg-white border-b text-lg dark:border-gray-700 hover:bg-gray-200"
                >
                  <td className="px-6 py-4">{budget.title}</td>
                  <td className="px-6 py-4">{budget.type}</td>
                  <td className="px-6 py-4">{budget.amount}</td>
                  <td
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {budget.date}
                  </td>
                  <td className="px-6 py-4 text-center flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(budget)}
                      className="font-bold text-lg text-[#00ABCD] hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(budget.id)}
                      className="font-bold text-lg text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isEditing && (
          <Model
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            handleUpdate={handleUpdate}
            handleChange={handleChange}
            editBudgetData={editBudgetData}
          />
        )}
      </div>
    </div>
  );
};

export default Budget;
