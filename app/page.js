import Image from "next/image";
import Servers from "@/modules/Servers/Servers";
import Information from "@/modules/Information/Information";
import HoveredDownloadLauncher from "@/modules/HoveredDownloadLauncher/HoveredDownloadLauncher";

export default function Home() {
  return (
    <div className="page" style={{ height: "100%" }}>
      <div className="preview">
        <Image
          className="altromon_about"
          src="/altromon_about.png"
          alt="altromon_about"
          width={1400}
          height={652}
          quality={100}
        />
        <div className="logo">
          <Image
            src="/logo.png"
            alt="logo"
            quality={100}
            width={560}
            height={112}
          />
          <div className="about">Локальный Minecraft проект</div>
          <HoveredDownloadLauncher />
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
