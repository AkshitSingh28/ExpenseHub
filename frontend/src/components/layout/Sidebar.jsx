function Sidebar({ setActivePage }) {

  return (

    <div className="w-56 bg-[#081028] text-white min-h-screen p-5">

      <h1 className="text-3xl font-bold mb-10">
        ExpenseHub
      </h1>

      <div className="space-y-4">

        <button
          onClick={() => setActivePage("dashboard")}
          className="block w-full text-left hover:text-blue-400"
        >
          Dashboard
        </button>

        <button
          onClick={() => setActivePage("analytics")}
          className="block w-full text-left hover:text-blue-400"
        >
          Analytics
        </button>

        <button
          onClick={() => setActivePage("categories")}
          className="block w-full text-left hover:text-blue-400"
        >
          Categories
        </button>

        <button
          onClick={() => setActivePage("settings")}
          className="block w-full text-left hover:text-blue-400"
        >
          Settings
        </button>

      </div>

    </div>

  );
}

export default Sidebar;