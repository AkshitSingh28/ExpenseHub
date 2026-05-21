import Sidebar from "../components/layout/Sidebar";

function Budgets() {

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-8">
          Budgets
        </h1>

        <div className="bg-white rounded-xl shadow p-8">

          <p className="text-lg">
            Budget Management
          </p>

        </div>

      </div>

    </div>

  );
}

export default Budgets;