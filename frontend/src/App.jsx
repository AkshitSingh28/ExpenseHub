import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const [showRegister, setShowRegister] = useState(false);

  if (isAuthenticated) {
    return (
      <Dashboard
        setIsAuthenticated={setIsAuthenticated}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {showRegister ? (
        <Register
          setShowRegister={setShowRegister}
        />
      ) : (
        <Login
          setIsAuthenticated={setIsAuthenticated}
          setShowRegister={setShowRegister}
        />
      )}
    </div>
  );
}

export default App;