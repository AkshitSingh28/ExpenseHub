function BudgetCard({
  category,
  spent,
  limit
}) {

  const percentage = Math.min(
    Math.round((spent / limit) * 100),
    100
  );

  const remaining = limit - spent;

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <div className="flex justify-between mb-4">

        <h2 className="text-xl font-bold">
          {category}
        </h2>

        <span className="text-gray-500">
          ₹ {spent} / ₹ {limit}
        </span>

      </div>

      {/* PROGRESS BAR */}

      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">

        <div
          className={`h-4 rounded-full ${
            percentage > 80
              ? "bg-red-500"
              : "bg-blue-600"
          }`}
          style={{
            width: `${percentage}%`
          }}
        ></div>

      </div>

      {/* INFO */}

      <div className="flex justify-between text-sm">

        <span>
          {percentage}% Used
        </span>

        <span
          className={
            remaining < 0
              ? "text-red-500"
              : "text-green-600"
          }
        >

          ₹ {remaining} Remaining

        </span>

      </div>

    </div>

  );
}

export default BudgetCard;
