import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context";

const Detail = () => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { id } = useParams();
  const { theme } = globalState;

  const urlUser = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(urlUser).then((res) => {
      globalDispatch({ type: "GET_USER", payload: res.data });
    });
  }, [urlUser, globalDispatch]);

  const { name, email, phone, website } = globalState.user;

  return (
    <div>
      <h1>{name}</h1>
      <table className={`table table-striped mt-3 table-hover table-${theme}`}>
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
