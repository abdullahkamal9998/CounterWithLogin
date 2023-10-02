import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const { loginBool } = useSelector((state) => state.login);
  return (
    <div>
      <Header />
      {!loginBool ? (
        <Auth />
      ) : (
        <div>
          <UserProfile />
          <Counter />
        </div>
      )}
    </div>
  );
}

export default App;
