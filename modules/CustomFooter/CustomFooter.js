import styles from "./CustomFooter.module.scss";
import discordIcon from "@/public/discord.svg";
import Image from "next/image";
import Link from "next/link";
const CustomFooter = () => {
  return (
    <footer>
      <div className={styles.content}>
        Тут обычно крупные проекты и компании пишут про права и лицензии, но мы
        таковыми не являемся. Поэтому, если вы что-то стырите - мы ничего не
        сможем сделать, а возможно ещё и сами что-то стырили ¯\_(ツ)_/¯
      </div>
      <div className={styles.social}>
        <Link href="https://discord.gg/9hWNXv2FpY" target="_blank">
          <Image src={discordIcon} alt="discord" width={48} height={48} />
        </Link>
      </div>
    </footer>
  );
};

export default CustomFooter;
