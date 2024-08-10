"use client";
import { useEffect, useRef, useState } from "react";
import { SkinViewer } from "skinview3d";
import useAuthStore from "@/modules/Auth/useAuthStore";
import styles from "./Profile.module.scss";
import { Button, Input } from "rsuite";
import useProfileStore from "@/modules/Profile/useProfileStore";
import { toast } from "react-toastify";
import ChangePasswordService from "@/services/ChangePasswordService";

const Profile = () => {
  const [password, setPassword] = useState("");
  const [retryPassword, setRetryPassword] = useState("");
  const [updateSkin, setUpdateSkin] = useState(false);
  const setSkin = useProfileStore((store) => store.setSkin);
  const setCape = useProfileStore((store) => store.setCape);
  const deleteSkin = useProfileStore((store) => store.deleteSkin);
  const deleteCape = useProfileStore((store) => store.deleteCape);
  const username = useAuthStore((store) => store.username);
  const createdAt = useAuthStore((store) => store.createdAt);
  const logout = useAuthStore((store) => store.logout);
  const skinRef = useRef(null);
  const login = async () => {
    if (password !== retryPassword) {
      return toast("Пароли не совпадают", {
        render: "Пароли не совпадают",
        type: "error",
        autoClose: 3000,
      });
    }
    const toastId = toast.loading("Меняем...");
    try {
      await ChangePasswordService.selfChange(password);
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
  useEffect(() => {
    if (skinRef.current) {
      new SkinViewer({
        canvas: skinRef.current,
        width: 400,
        height: 500,
        skin: `${process.env.NEXT_PUBLIC_API_URL}/skins/textures/skin/${username}/${new Date().getTime()}`,
        cape: `${process.env.NEXT_PUBLIC_API_URL}/skins/textures/cape/${username}/${new Date().getTime()}`,
        panorama: "/panorama.png",
        zoom: 0.5,
      });
    }
  }, [updateSkin]);
  return (
    <div className={styles.profile}>
      <canvas ref={skinRef} style={{ cursor: "pointer" }} />
      <div className={styles.info}>
        <div>Никнейм: {username}</div>
        <div>
          Создан: <span className="blue">{createdAt}</span>
        </div>
        <div className={styles.change}>
          <Input
            value={password}
            onChange={setPassword}
            type="password"
            onKeyUp={onKeyPress}
            placeholder="Новый пароль"
          />
          <Input
            value={retryPassword}
            onChange={setRetryPassword}
            type="password"
            onKeyUp={onKeyPress}
            placeholder="Повторение нового пароля"
          />
          <Button appearance="primary" color="green" onClick={login}>
            Сменить
          </Button>
        </div>
        <div className={styles.buttons}>
          <label htmlFor="skin" className="rs-btn rs-btn-primary">
            Загрузить скин
          </label>
          <input
            id="skin"
            type="file"
            hidden
            onChange={async (event) => {
              if (await setSkin(event)) {
                setUpdateSkin((prev) => !prev);
              }
            }}
          />
          <label htmlFor="cape" className="rs-btn rs-btn-primary">
            Загрузить плащ
          </label>
          <input
            id="cape"
            type="file"
            hidden
            onChange={async (event) => {
              if (await setCape(event)) {
                setUpdateSkin((prev) => !prev);
              }
            }}
          />
          <Button
            appearance="ghost"
            color="red"
            onClick={async () => {
              if (await deleteSkin()) {
                setUpdateSkin((prev) => !prev);
              }
            }}
          >
            Удалить скин
          </Button>
          <Button
            appearance="ghost"
            color="red"
            onClick={async () => {
              if (await deleteCape()) {
                setUpdateSkin((prev) => !prev);
              }
            }}
          >
            Удалить плащ
          </Button>
          <Button appearance="primary" color="red" onClick={logout}>
            Выйти из аккаунта
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
