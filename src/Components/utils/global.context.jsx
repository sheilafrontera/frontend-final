import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";

const GlobalContext = createContext();

const initialState = {
  theme: "light",
  data: [],
  user: {},
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST":
      return { ...state, data: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      return {
        ...state,
        favs: state.favs.filter((fav) => fav.id !== action.payload),
      };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
};

const ContextProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(globalReducer, initialState);

  const urlList = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    axios(urlList).then((res) =>
      globalDispatch({ type: "GET_LIST", payload: res.data })
    );
  }, [urlList]);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(globalState.favs));
  }, [globalState.favs]);

  const contextValue = useMemo(() => {
    return { globalState, globalDispatch };
  }, [globalState, globalDispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
