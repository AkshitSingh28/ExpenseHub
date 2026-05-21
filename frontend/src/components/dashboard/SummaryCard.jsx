function SummaryCard({ title, amount, color }) {

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-gray-500 text-lg">
        {title}
      </h2>

      <p className={`text-3xl font-bold mt-3 ${color}`}>
        ₹ {amount}
      </p>

    </div>

  );
}

export default SummaryCard;