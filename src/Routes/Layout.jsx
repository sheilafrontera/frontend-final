import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useGlobalContext } from "../Components/utils/global.context";

const Layout = () => {
  const { globalState } = useGlobalContext();
  const { theme } = globalState;

  return (
    <>
      <Navbar />
      <main
        className={`${
          theme === "light" ? "bg-white" : "bg-secondary"
        } flex-grow-1`}
      >
        <div className="container pt-4 pb-5">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
