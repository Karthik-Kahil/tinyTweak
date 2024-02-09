import { Outlet } from "react-router-dom";
import NavHeader from "./Pages/NavHeader/NavHeader";
import { Toaster } from "react-hot-toast";
import Footer from "./Pages/Footer/Footer";

function AppLayout() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <NavHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
