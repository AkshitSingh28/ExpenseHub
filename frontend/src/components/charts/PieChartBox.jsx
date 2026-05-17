import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function PieChartBox({ expenses }) {

  const categoryData = [];

  expenses.forEach((expense) => {

    const existing = categoryData.find(
      item => item.name === expense.category
    );

    if (existing) {

      existing.value += expense.amount;

    } else {

      categoryData.push({
        name: expense.category,
        value: expense.amount
      });

    }

  });

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF"
  ];

  return (

    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Category Analytics
      </h2>

      <PieChart width={400} height={300}>

        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >

          {categoryData.map((entry, index) => (

            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />

          ))}

        </Pie>

        <Tooltip />
        <Legend />

      </PieChart>

    </div>

  );
}

export default PieChartBox;