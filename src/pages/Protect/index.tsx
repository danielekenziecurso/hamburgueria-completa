import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const Protect = () => {
  const { user } = useContext(UserContext);

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default Protect;
