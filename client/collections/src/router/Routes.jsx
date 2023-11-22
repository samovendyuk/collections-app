import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegistrationPage from "../pages/Registration";
import AdminPage from "../pages/Admin";
import HomeActive from "../pages/HomeActive";
import ProtectedRoute from "../components/protected-router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<HomeActive />} />
      </Route>
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default Router;
