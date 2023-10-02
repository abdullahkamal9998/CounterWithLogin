import { useForm } from "react-hook-form";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/Slices/loginSlice";

const Auth = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const formHandler = (d) => {
    dispatch(
      loginActions.login({ userName: d.userName, password: d.password })
    );
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit(formHandler)}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("userName")} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
