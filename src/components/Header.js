import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { loginActions } from "../store/Slices/loginSlice";

const Header = () => {
  const { loginBool } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginBool && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
