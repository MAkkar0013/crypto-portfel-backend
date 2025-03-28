import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Navigation from "./Header";
import AdminPanel from "./AdminPanel";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("user_id");
  const isAdmin = localStorage.getItem("is_admin") === "true";

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/admin" element={<AdminPanel />} />
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
