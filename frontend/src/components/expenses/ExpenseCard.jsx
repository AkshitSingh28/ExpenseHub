function ExpenseCard({ expense, onDelete }) {

  return (

    <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">

      {/* LEFT SIDE */}

      <div>

        {/* TITLE */}

        <h2 className="text-lg font-semibold">
          {expense.title}
        </h2>

        {/* CATEGORY */}

        <div className="flex gap-3 mt-2">

          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
            {expense.category}
          </span>

          <span
            className={`px-3 py-1 text-sm rounded-full ${
              expense.type === "income"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {expense.type}
          </span>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="text-right">

        {/* AMOUNT */}

        <p
          className={`text-xl font-bold ${
            expense.type === "income"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >

          {expense.type === "income"
            ? "+ "
            : "- "}

          ₹ {expense.amount}

        </p>

        {/* DELETE BUTTON */}

        <button
          onClick={() => onDelete(expense.id)}
          className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default ExpenseCard;