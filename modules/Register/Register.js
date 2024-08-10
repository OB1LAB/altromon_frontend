"use client";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Register.module.scss";
import { Button, Input } from "rsuite";
import useAuthStore from "@/modules/Auth/useAuthStore";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const Register = () => {
  const isAuth = useAuthStore((store) => store.isAuth);
  const registerUserName = useAuthStore((store) => store.registerUserName);
  const setRegisterUserName = useAuthStore(
    (store) => store.setRegisterUserName,
  );
  const registerPassword = useAuthStore((store) => store.registerPassword);
  const setRegisterPassword = useAuthStore(
    (store) => store.setRegisterPassword,
  );
  const registerRetryPassword = useAuthStore(
    (store) => store.registerRetryPassword,
  );
  const setRegisterRetryPassword = useAuthStore(
    (store) => store.setRegisterRetryPassword,
  );
  const setRToken = useAuthStore((store) => store.setRToken);
  const register = useAuthStore((store) => store.register);
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      register();
    }
  };
  useEffect(() => {
    if (isAuth) {
      redirect("/");
    }
  }, [isAuth]);
  return (
    <div className={styles.form}>
      <div>Регистрация аккаунта</div>
      <Input
        placeholder="Логин"
        id="username"
        onKeyUp={onKeyPress}
        value={registerUserName}
        onChange={setRegisterUserName}
      />
      <Input
        value={registerPassword}
        onChange={setRegisterPassword}
        placeholder="Пароль"
        type="password"
        onKeyUp={onKeyPress}
      />
      <Input
        value={registerRetryPassword}
        onChange={setRegisterRetryPassword}
        placeholder="Повторение пароля"
        type="password"
        onKeyUp={onKeyPress}
      />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_SITE_RKEY}
        onChange={setRToken}
        size="normal"
        theme="dark"
      />
      <Button appearance="primary" onClick={register}>
        Зарегистрироваться
      </Button>
    </div>
  );
};

export default Register;
