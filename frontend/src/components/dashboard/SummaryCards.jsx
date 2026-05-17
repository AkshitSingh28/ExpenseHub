function SummaryCards() {
  return (

    <div className="grid grid-cols-4 gap-5 mb-8">

      <div className="bg-white p-5 rounded-xl shadow">
        <h3>Total Balance</h3>
        <p className="text-2xl font-bold">
          ₹45,000
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3>Income</h3>
        <p className="text-2xl font-bold">
          ₹70,000
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3>Expenses</h3>
        <p className="text-2xl font-bold">
          ₹25,000
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3>Savings</h3>
        <p className="text-2xl font-bold">
          ₹45,000
        </p>
      </div>

    </div>
  );
}

export default SummaryCards;