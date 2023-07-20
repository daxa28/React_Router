import React from "react";
import MyButton from "../components/UI/button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../context";

const LoginExit = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div>
      <h2>Личный кабинет</h2>
      <h3>Вы вошли в личный кабинет! </h3>
      <h3>На данный момент вы можете просмотреть список постов.</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MyButton type="submit" onClick={logout}>
          Выйти
        </MyButton>
      </div>
      <p>*Для выхода из личного кабинета нажмите кнопку "Выйти".</p>
    </div>
  );
};

export default LoginExit;
