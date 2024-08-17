"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const timeout = 5;
const HoveredDownloadLauncher = () => {
  const [percent, setPercent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const handleEvent = async () => {
    if (isHover && percent < 100) {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      setPercent(percent + 1);
    } else if (!isHover && percent > 0) {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      setPercent(percent - 1);
    }
  };
  useEffect(() => {
    handleEvent();
  }, [isHover, percent]);
  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        "--downloadAnimation": `linear-gradient(to bottom, rgba(105, 0, 182, ${percent / 100}) 35%, rgba(135, 0, 155, 1) 100%) border-box`,
      }}
      href="https://altromon.ob1lab.ru/static/AltroMon%20Launcher%20Updater.exe"
    >
      Скачать Лаунчер
    </Link>
  );
};

export default HoveredDownloadLauncher;
