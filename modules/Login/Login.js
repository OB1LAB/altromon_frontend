"use client";
import { Button, Input } from "rsuite";
import styles from "./Login.module.scss";
import useAuthStore from "@/modules/Auth/useAuthStore";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const isAuth = useAuthStore((store) => store.isAuth);
  const username = useAuthStore((store) => store.username);
  const setUsername = useAuthStore((store) => store.setUsername);
  const password = useAuthStore((store) => store.password);
  const setPassword = useAuthStore((store) => store.setPassword);
  const login = useAuthStore((store) => store.login);
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      login();
    }
  };
  useEffect(() => {
    if (isAuth) {
      redirect("/");
    }
  }, [isAuth]);
  return (
    <div className={styles.form}>
      <div>Вход в аккаунт</div>
      <Input
        placeholder="Логин"
        id="username"
        onKeyUp={onKeyPress}
        value={username}
        onChange={setUsername}
      />
      <Input
        value={password}
        onChange={setPassword}
        placeholder="Пароль"
        id="password"
        type="password"
        onKeyUp={onKeyPress}
      />
      <Button appearance="primary" onClick={login}>
        Войти
      </Button>
    </div>
  );
};

export default Login;
