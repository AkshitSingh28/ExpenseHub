import Sidebar from "../components/layout/Sidebar";
import ExpenseList from "../components/ExpenseList";

function Transactions() {

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-8">
          Transactions
        </h1>

        <ExpenseList />

      </div>

    </div>

  );
}

export default Transactions;