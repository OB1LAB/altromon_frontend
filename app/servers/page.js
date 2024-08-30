import servers from "@/const";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className={styles.servers}>
      {Object.keys(servers).map((server) => (
        <Link
          href={`/servers/${server}`}
          key={server}
          className={styles.server}
        >
          <Image
            quality={100}
            src={`/${server}.jpg`}
            alt={server}
            sizes="100vw"
            width={0}
            height={0}
          />
          <div>{servers[server].name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
