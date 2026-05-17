function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        Expense Tracker
      </h1>

      <ul className="space-y-5">
        <li className="hover:text-blue-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Expenses
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Analytics
        </li>

        <li className="hover:text-red-400 cursor-pointer">
          Logout
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;