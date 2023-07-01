import Form from "../Components/Form";
import { useState } from "react";
import { useGlobalContext } from "../Components/utils/global.context";

const Contact = () => {
  const { globalState } = useGlobalContext();
  const { theme } = globalState;
  const isDark = theme === "dark";

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      user.name.trim().length > 5 &&
      user.email.includes("@") &&
      user.email.includes(".") &&
      user.email.length > 3
    ) {
      console.log(user);
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div className={` ${isDark && "text-light"}`}>
      <h1>Contact</h1>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form setUser={setUser} handleSubmit={handleSubmit} />
      {error && (
        <p className="text-danger mt-3">
          Por favor verifique su información nuevamente.
        </p>
      )}
      {show && (
        <p className="text-success mt-3">
          Gracias {user.name}, te contactaremos cuando antes vía mail.
        </p>
      )}
    </div>
  );
};

export default Contact;
