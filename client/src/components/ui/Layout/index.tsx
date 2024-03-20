import Navbar from "@/components/generic/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}{" "}
      <Outlet />
    </>
  );
};

export default Layout;
