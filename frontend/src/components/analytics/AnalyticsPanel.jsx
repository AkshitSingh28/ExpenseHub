function AnalyticsPanel({ expenses = [] }) {

  const totalIncome = expenses
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const expenseOnly = expenses.filter(
    (item) => item.type === "expense"
  );

  const categoryTotals = {};

  expenseOnly.forEach((item) => {
    const category = item.category || "Other";

    categoryTotals[category] =
      (categoryTotals[category] || 0) + Number(item.amount);
  });

  const categoryData = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      category,
      amount,
      percentage:
        totalExpense > 0
          ? Math.round((amount / totalExpense) * 100)
          : 0,
    })
  );

  const topCategory =
    categoryData.length > 0
      ? categoryData.reduce((max, item) =>
          item.amount > max.amount ? item : max
        )
      : null;

  const pieGradient = categoryData
    .map((item, index) => {
      const colors = [
        "#3b82f6",
        "#22c55e",
        "#f97316",
        "#ef4444",
        "#8b5cf6",
        "#14b8a6",
      ];

      let start = categoryData
        .slice(0, index)
        .reduce((sum, i) => sum + i.percentage, 0);

      let end = start + item.percentage;

      return `${colors[index % colors.length]} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Income</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            ₹ {totalIncome}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Expense</h2>
          <p className="text-3xl font-bold text-red-500 mt-2">
            ₹ {totalExpense}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Top Category</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {topCategory ? topCategory.category : "None"}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PIE CHART */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-5">
            Category Pie Chart
          </h2>

          <div
            className="w-64 h-64 rounded-full mx-auto"
            style={{
              background:
                categoryData.length > 0
                  ? `conic-gradient(${pieGradient})`
                  : "#e5e7eb",
            }}
          ></div>

          <div className="mt-6 space-y-2">

            {categoryData.map((item) => (
              <div
                key={item.category}
                className="flex justify-between text-sm"
              >
                <span>{item.category}</span>
                <span>
                  ₹ {item.amount} ({item.percentage}%)
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* BAR CHART */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-5">
            Category Spending
          </h2>

          <div className="space-y-5">

            {categoryData.map((item) => (
              <div key={item.category}>

                <div className="flex justify-between mb-1">
                  <span>{item.category}</span>
                  <span>₹ {item.amount}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsPanel;