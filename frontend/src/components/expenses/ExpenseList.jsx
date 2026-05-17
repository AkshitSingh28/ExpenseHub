import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseCard from "./expenses/ExpenseCard";

function ExpenseList() {

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

  const deleteExpense = async (id) => {

    try {

      await axios.delete(
        `http://127.0.0.1:8000/expenses/${id}`
      );

      fetchExpenses();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="space-y-4">

      {expenses.map((expense) => (

        <ExpenseCard
          key={expense.id}
          expense={expense}
          onDelete={deleteExpense}
        />

      ))}

    </div>

  );
}

export default ExpenseList;