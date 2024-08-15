import styles from "./Infromation.module.scss";
import Link from "next/link";
import Image from "next/image";
const Information = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className={styles.info}>Информация</div>
      <div className={styles.border} />
      <div className={styles.blocks}>
        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.name}>Кастомизация</div>
            <div>
              На нашем проекте вы можете установить собственный скин и плащ в
              высоких разрешениях!
            </div>
            <Link href={"/profile"}>Изменить</Link>
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/panorama.png"}
            alt="custom"
          />
        </div>
        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.name}>Лаунчер</div>
            <div>
              Вам не придётся возиться с установкой. Наш лаунчер сделает всё
              автоматически!
            </div>
            <Link href="https://altromon.ob1lab.ru/static/AltroMon%20Launcher%20Updater.exe">
              Скачать
            </Link>
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/panorama.png"}
            alt="custom"
          />
        </div>
        <div className={styles.block}>
          <div className={`${styles.content} ${styles.small}`}>
            <div className={styles.name}>Отсутствие доната</div>
            <div>
              Данный проект создаётся исключительно на энтузиазме и мотивации
              двух студентов. Все игроки (Даже создатели, т.е OB1CHAM и
              datav3nom) играют в равных условиях.
            </div>
            <div className={styles.link}>Подарите пж дошик</div>
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/panorama.png"}
            alt="custom"
          />
        </div>
        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.name}>Отсутствие лагов</div>
            <div>
              Наш сервер{" "}
              <s>
                <i>
                  <u>скорее всего</u>
                </i>
              </s>{" "}
              выдержит любые нагрузки.
            </div>
            <div className={styles.link}>WoW!</div>
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/panorama.png"}
            alt="custom"
          />
        </div>
        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.name}>Постоянные исправления</div>
            <div>
              Мы активно работаем над исправление багах в модах и добавлению
              нового контента.
            </div>
            <Link target="_blank" href="https://github.com/AltromonTeam">
              Следить за изменениями
            </Link>
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/panorama.png"}
            alt="custom"
          />
        </div>
        <div className={styles.block}>
          <div className={`${styles.content} ${styles.small}`}>
            <div className={styles.name}>Минимальное количество правил</div>
            <div>
              Большое количество правил нам ни к чему. Единственные правила - не
              создавать помеху комфортной игре других игроков/Намеренно пытаться
              перегрузить сервер.
            </div>
            <div className={styles.link}>Круто!</div>
          </div>
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={"/panorama.png"}
            alt="custom"
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
