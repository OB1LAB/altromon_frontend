"use client";
import useAuthStore from "@/modules/Auth/useAuthStore";
import { redirect } from "next/navigation";
const admins = ["OB1CHAM", "datav3nom"];
export default function Template({ children }) {
  const isAuth = useAuthStore((store) => store.isAuth);
  const username = useAuthStore((store) => store.username);
  if (!isAuth || !admins.includes(username)) {
    redirect("/");
    return <h2>Сначала нужно авторизоваться</h2>;
  }
  return children;
}
