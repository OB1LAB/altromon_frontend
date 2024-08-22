import styles from "./Infromation.module.scss";
import Link from "next/link";
import Image from "next/image";
const Information = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className={styles.info}>Информация</div>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.name}>Кастомизация</div>
            <div className={styles.infoContent}>
              <div>
                На нашем проекте вы можете установить собственный скин и плащ в
                высоких разрешениях!
              </div>
              <ul>
                <li>Высокие разрешения</li>
                <li>Выбор модели скина</li>
                <li>Удаление скина/Плаща</li>
              </ul>
            </div>
            <div className={styles.buttons}>
              <Link href={"/profile"}>Изменить</Link>
              <Link
                target="_blank"
                href={"/free.mp4"}
                className={styles.rolling}
              >
                <div>Хочу больше</div>
              </Link>
            </div>
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/panorama.png"}
            alt="custom"
          />
        </div>
        <div className={`${styles.block} ${styles.reverse}`}>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/panorama.png"}
            alt="custom"
          />
          <div className={`${styles.content} ${styles.centered}`}>
            <div className={styles.name}>Лаунчер</div>
            <div className={styles.infoContent}>
              <div>
                Вам не придётся возиться с установкой. Наш лаунчер сделает всё
                автоматически!
              </div>
              <ul>
                <li>Автоматическое обновление сборок</li>
                <li>Отображение онлайна</li>
                <li>Удобный и красивый интерфейс</li>
              </ul>
            </div>
            <Link href="https://altromon.ob1lab.ru/static/AltroMon%20Launcher%20Updater.exe">
              Скачать
            </Link>
          </div>
        </div>
        <div className={`${styles.info} ${styles.infoAbout}`}>Прочее</div>
        <div className={styles.groupBlocks}>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Отсутствие доната</div>
            <div className={styles.blockDescription}>
              Данный проект создаётся исключительно на энтузиазме и мотивации
              двух студентов.
            </div>
            <div className={styles.link}>Круто!</div>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Отсутствие доната</div>
            <div className={styles.blockDescription}>
              Данный проект создаётся исключительно на энтузиазме и мотивации
              двух студентов.
            </div>
            <div className={styles.link}>Круто!</div>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Отсутствие доната</div>
            <div className={styles.blockDescription}>
              Данный проект создаётся исключительно на энтузиазме и мотивации
              двух студентов.
            </div>
            <div className={styles.link}>Круто!</div>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Отсутствие доната</div>
            <div className={styles.blockDescription}>
              Данный проект создаётся исключительно на энтузиазме и мотивации
              двух студентов.
            </div>
            <div className={styles.link}>Круто!</div>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Отсутствие доната</div>
            <div className={styles.blockDescription}>
              Данный проект создаётся исключительно на энтузиазме и мотивации
              двух студентов.
            </div>
            <div className={styles.link}>Круто!</div>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Отсутствие доната</div>
            <div className={styles.blockDescription}>
              Данный проект создаётся исключительно на энтузиазме и мотивации
              двух студентов.
            </div>
            <div className={styles.link}>Круто!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
