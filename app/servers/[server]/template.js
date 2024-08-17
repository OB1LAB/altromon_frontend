"use client";
import servers from "@/const";
import { useParams } from "next/navigation";

export default function Template({ children }) {
  const params = useParams();
  const { server } = params;
  if (!Object.keys(servers).includes(server)) {
    return <h1>Сервер не найден</h1>;
  }
  return children;
}
