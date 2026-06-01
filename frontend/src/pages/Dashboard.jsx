import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/layout/Sidebar";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

import SummaryCard from "../components/dashboard/SummaryCard";

import AnalyticsPanel from "../components/analytics/AnalyticsPanel";

import BudgetCard from "../components/budget/BudgetCard";

import AIInsights from "../components/ai/AIInsights";

import SubscriptionTracker from "../components/subscriptions/SubscriptionTracker";

function Dashboard() {

  const [expenses, setExpenses] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  // ACTIVE SIDEBAR PAGE

  const [activePage, setActivePage] =
    useState("dashboard");

  // BUDGET DATA

  const budgets = [
    {
      category: "Food",
      limit: 5000
    },
    {
      category: "Travel",
      limit: 8000
    },
    {
      category: "Shopping",
      limit: 7000
    },
    {
      category: "Bills",
      limit: 6000
    }
  ];

  // CATEGORY SPENDING

  const getCategorySpent = (category) => {

    return expenses
      .filter(
        (item) =>
          item.category === category &&
          item.type === "expense"
      )
      .reduce(
        (sum, item) =>
          sum + Number(item.amount),
        0
      );

  };

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

  // LOAD DATA

  useEffect(() => {

    fetchExpenses();

  }, []);

  // CALCULATIONS

  const totalIncome = expenses
    .filter((item) => item.type === "income")
    .reduce(
      (acc, item) =>
        acc + Number(item.amount),
      0
    );

  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .reduce(
      (acc, item) =>
        acc + Number(item.amount),
      0
    );

  const balance =
    totalIncome - totalExpense;

  // FILTER + SEARCH

  const filteredExpenses =
    expenses.filter((item) => {

      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch
      );

    });

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}

      <Sidebar
        setActivePage={setActivePage}
      />

      {/* MAIN CONTENT */}

      <div className="flex-1 p-6">

        {/* DASHBOARD PAGE */}

        {activePage === "dashboard" && (

          <>

            <h1 className="text-3xl font-bold mb-8">
              Dashboard
            </h1>

            {/* SUMMARY CARDS */}

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

            <AIInsights />

            {/* SEARCH */}

            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="border p-3 rounded-lg w-full mb-4"
            />

            {/* FILTER */}

            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(
                  e.target.value
                )
              }
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

            <ExpenseForm
              fetchExpenses={fetchExpenses}
            />

            {/* LIST */}

            <ExpenseList
              expenses={filteredExpenses}
              fetchExpenses={fetchExpenses}
            />

          </>

        )}

        {/* ANALYTICS PAGE */}

        {activePage === "analytics" && (

          <AnalyticsPanel
            expenses={expenses}
          />

        )}

        {/* BUDGET PAGE */}

        {activePage === "budgets" && (

          <div>

            <h1 className="text-3xl font-bold mb-8">
              Budget Management
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {budgets.map((budget) => (

                <BudgetCard
                  key={budget.category}
                  category={budget.category}
                  limit={budget.limit}
                  spent={getCategorySpent(
                    budget.category
                  )}
                />

              ))}

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


        {activePage === "subscriptions" && (
          <SubscriptionTracker />
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