"use client";
import styles from "./ChangePassword.module.scss";
import { Button, Input } from "rsuite";
import { useState } from "react";
import { toast } from "react-toastify";
import ChangePasswordService from "@/services/ChangePasswordService";

const ChangePassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retryPassword, setRetryPassword] = useState("");
  const login = async () => {
    if (password !== retryPassword) {
      return toast("Ты чё, пьяный? Пароли не совпадают", {
        render: "Ты чё, пьяный? Пароли не совпадают",
        type: "error",
        autoClose: 3000,
      });
    }
    const toastId = toast.loading("Меняем...");
    try {
      await ChangePasswordService.anotherChange(username, password);
      toast.update(toastId, {
        render: "Пароль сменен",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (e) {
      toast.update(toastId, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      login();
    }
  };
  return (
    <div className={styles.change}>
      <Input
        value={username}
        onChange={setUsername}
        onKeyUp={onKeyPress}
        placeholder="Никнейм дебила"
      />
      <Input
        value={password}
        onChange={setPassword}
        type="password"
        onKeyUp={onKeyPress}
        placeholder="Его новый пароль"
      />
      <Input
        value={retryPassword}
        onChange={setRetryPassword}
        type="password"
        onKeyUp={onKeyPress}
        placeholder="Лучше тебе повторить его новый пароль"
      />
      <Button appearance="primary" color="green" onClick={login}>
        Сменить
      </Button>
    </div>
  );
};

export default ChangePassword;
