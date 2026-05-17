import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/layout/Sidebar";
import SummaryCards from "../components/dashboard/SummaryCards";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";



function Dashboard() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

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

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        <SummaryCards />

        <ExpenseForm />

        <ExpenseList />

      </div>

    </div>

  );
}

export default Dashboard;