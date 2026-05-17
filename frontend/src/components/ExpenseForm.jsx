import { useState } from "react";
import axios from "axios";

function ExpenseForm() {

  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("Food");

  const [type, setType] = useState("expense");

  const addExpense = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://127.0.0.1:8000/expenses/1",
        {
          title,
          amount: parseFloat(amount),
          category,
          type
        }
      );

      alert("Transaction Added");

      setTitle("");
      setAmount("");

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <form
      onSubmit={addExpense}
      className="bg-white p-6 rounded-xl shadow mb-8"
    >

      <h2 className="text-2xl font-bold mb-5">
        Add Transaction
      </h2>

      <div className="grid grid-cols-4 gap-4">

        {/* TITLE */}

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-lg"
          required
        />

        {/* AMOUNT */}

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-3 rounded-lg"
          required
        />

        {/* CATEGORY */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-3 rounded-lg"
        >

          <option>Food</option>

          <option>Travel</option>

          <option>Shopping</option>

          <option>Bills</option>

          <option>Entertainment</option>

        </select>

        {/* TYPE */}

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-3 rounded-lg"
        >

          <option value="expense">
            Expense
          </option>

          <option value="income">
            Income
          </option>

        </select>

      </div>

      <button
        type="submit"
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
      >
        Add Transaction
      </button>

    </form>

  );
}

export default ExpenseForm;