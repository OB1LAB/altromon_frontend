"use client";
import useAuthStore from "@/modules/Auth/useAuthStore";
import { redirect } from "next/navigation";

export default function Template({ children }) {
  const isAuth = useAuthStore((store) => store.isAuth);
  if (!isAuth) {
    redirect("/");
    return <h2>Сначала нужно авторизоваться</h2>;
  }
  return children;
}
