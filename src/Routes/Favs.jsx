import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Favs = () => {
  const { globalState } = useGlobalContext();
  const { theme } = globalState;
  const isDark = theme === "dark";

  return (
    <div className={`${isDark && "text-light"}`}>
      <h1>Favorites</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {globalState.favs.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
