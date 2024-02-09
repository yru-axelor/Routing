import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./components/Login/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const PrivateRoute = ({ element }) =>
    isLogin ? element : <Navigate to={"/login"} />;
  const LoginRoute = ({ element }) =>
    isLogin ? <Navigate to={"/protected"} /> : element;
  return (
    <div className="App">
      <NavBar isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<PublicRoute />} />
        <Route
          path="/protected"
          element={<PrivateRoute element={<ProtectedRoute />} />}
        />
        <Route path="/login" element={<LoginRoute  element={<Login setIsLogin={setIsLogin} />} />} />

        
      </Routes>
      {/* <ProtectedRoute/> */}
    </div>
  );
}

export default App;
