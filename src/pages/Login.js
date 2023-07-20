import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", true);
  };

  return (
    <div>
      <h2>Личный кабинет</h2>
      <h3>Войти в личный кабинет</h3>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
      <p>*Для входа в личный кабинет достаточно нажать кнопку "Войти".</p>
    </div>
  );
};

export default Login;
