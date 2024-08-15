import Image from "next/image";
import Servers from "@/modules/Servers/Servers";
import Link from "next/link";
import Information from "@/modules/Information/Information";

export default function Home() {
  return (
    <div className="page" style={{ height: "100%" }}>
      <div className="preview">
        <Image
          className="altromon_about"
          src="/altromon_about.png"
          alt="altromon_about"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="logo">
          <div className="upperLogo">
            <Image
              src="/logo.png"
              alt="logo"
              sizes="100vw"
              width={0}
              height={0}
              style={{ width: "40%", height: "auto" }}
            />
            <div className="about">Локальный Minecraft проект</div>
            <Link href="https://altromon.ob1lab.ru/static/AltroMon%20Launcher%20Updater.exe">
              Скачать Лаунчер
            </Link>
          </div>
          <div className="createdBy">
            Создан исключительно в развлекательных целях
          </div>
        </div>
      </div>
      <Servers />
      <Information />
    </div>
  );
}
