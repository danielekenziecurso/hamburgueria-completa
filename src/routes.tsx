import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import Protect from "./pages/Protect";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<Protect />}>
        <Route path="/shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
