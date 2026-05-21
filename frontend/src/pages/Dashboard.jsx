import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/layout/Sidebar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/dashboard/SummaryCard";

function Dashboard() {

  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // ACTIVE SIDEBAR PAGE

  const [activePage, setActivePage] = useState("dashboard");

  // FETCH DATA

  const fetchExpenses = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/expenses/1"
      );

      setExpenses(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchExpenses();

  }, []);

  // CALCULATIONS

  const totalIncome = expenses
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = totalIncome - totalExpense;

  // FILTER

  const filteredExpenses = expenses.filter((item) => {

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;

  });

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}

      <Sidebar setActivePage={setActivePage} />

      {/* MAIN CONTENT */}

      <div className="flex-1 p-6">

        {/* DASHBOARD PAGE */}

        {activePage === "dashboard" && (

          <>
            <h1 className="text-3xl font-bold mb-8">
              Dashboard
            </h1>

            {/* SUMMARY */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

              <SummaryCard
                title="Total Income"
                amount={totalIncome}
                color="text-green-600"
              />

              <SummaryCard
                title="Total Expense"
                amount={totalExpense}
                color="text-red-500"
              />

              <SummaryCard
                title="Balance"
                amount={balance}
                color="text-blue-600"
              />

            </div>

            {/* SEARCH */}

            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-3 rounded-lg w-full mb-4"
            />

            {/* FILTER */}

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border p-3 rounded-lg mb-6"
            >

              <option>All</option>
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Bills</option>
              <option>Entertainment</option>

            </select>

            {/* FORM */}

            <ExpenseForm fetchExpenses={fetchExpenses} />

            {/* LIST */}

            <ExpenseList
              expenses={filteredExpenses}
              fetchExpenses={fetchExpenses}
            />
          </>

        )}

        {/* ANALYTICS PAGE */}

        {activePage === "analytics" && (

          <div>

            <h1 className="text-3xl font-bold mb-6">
              Analytics
            </h1>

            <div className="bg-white p-6 rounded-xl shadow">

              <p className="text-lg mb-4">
                Analytics Overview
              </p>

              <div className="space-y-3">

                <div>
                  Total Income:
                  <span className="text-green-600 font-bold ml-2">
                    ₹ {totalIncome}
                  </span>
                </div>

                <div>
                  Total Expense:
                  <span className="text-red-500 font-bold ml-2">
                    ₹ {totalExpense}
                  </span>
                </div>

                <div>
                  Current Balance:
                  <span className="text-blue-600 font-bold ml-2">
                    ₹ {balance}
                  </span>
                </div>

              </div>

            </div>

          </div>

        )}

        {/* CATEGORIES PAGE */}

        {activePage === "categories" && (

          <div>

            <h1 className="text-3xl font-bold mb-6">
              Categories
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              <div className="bg-white p-6 rounded-xl shadow">
                Food
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                Travel
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                Shopping
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                Bills
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                Entertainment
              </div>

            </div>

          </div>

        )}

        {/* SETTINGS PAGE */}

        {activePage === "settings" && (

          <div>

            <h1 className="text-3xl font-bold mb-6">
              Settings
            </h1>

            <div className="bg-white p-6 rounded-xl shadow">

              <p className="mb-3">
                User Settings Panel
              </p>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Save Settings
              </button>

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default Dashboard;