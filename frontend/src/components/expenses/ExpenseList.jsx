import ExpenseCard from "./expenses/ExpenseCard";

function ExpenseList({ expenses }) {

  return (

    <div className="space-y-4">

      {expenses.length === 0 ? (

        <p className="text-gray-500">
          No transactions found
        </p>

      ) : (

        expenses.map((expense) => (

          <ExpenseCard
            key={expense.id}
            expense={expense}
          />

        ))

      )}

    </div>

  );
}

export default ExpenseList;