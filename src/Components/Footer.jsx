import { useGlobalContext } from "../Components/utils/global.context";

const Footer = () => {
  const { globalState } = useGlobalContext();
  const { theme } = globalState;

  return (
    <footer className={`bg-${theme} p-3 mt-auto`}>
      <div className="container d-flex justify-content-center align-items-center">
        <p className={`m-0 text-${theme === "light" ? "dark" : "light"}`}>
          Powered by
        </p>
        <img src="./images/DH.png" alt="DH-logo" height={40} />
      </div>
    </footer>
  );
};

export default Footer;
