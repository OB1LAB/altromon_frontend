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
            src={"/custom.png"}
            alt="custom"
          />
        </div>
        <div className={`${styles.block} ${styles.reverse}`}>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/launcher.png"}
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
            <div className={styles.link}>Подарите пж дошик</div>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Низкий пинг</div>
            <div className={styles.blockDescription}>
              Сервер находится в СНГ, благодаря чему задержки минимальны.
            </div>
            <div className={styles.link}>Ура!</div>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/server.jpg"}
              alt="custom"
            />
            <div className={styles.blockName}>Стабильность работы</div>
            <div className={styles.blockDescription}>
              Мы{" "}
              <s>
                <u>
                  <i>скорее всего</i>
                </u>
              </s>{" "}
              выдержим любые нагрузки, в ином случае время работоспособность
              будет восстановлена в кратчайшие сроки.
            </div>
            <div className={styles.link}>WoW!</div>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Отзывчивая администрация</div>
            <div className={styles.blockDescription}>
              Мы дорожим своей аудиторией, поэтому ответим каждому и на любой
              вопрос!
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
            <div className={styles.blockName}>Активная разработка</div>
            <div className={styles.blockDescription}>
              Наш проект является публичным, в том числе и исходный код, который
              вы можете посмотреть на github!
            </div>
            <Link
              target="_blank"
              href="https://github.com/AltromonTeam"
              className={styles.link}
            >
              Следить за изменениями
            </Link>
          </div>
          <div className={styles.groupBlock}>
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/panorama.png"}
              alt="custom"
            />
            <div className={styles.blockName}>Минимум правил</div>
            <div className={styles.blockDescription}>
              Единственное, что вы должны соблюдать - комфорт игры для других
              игроков.
            </div>
            <div className={styles.link}>Ого!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
