import styles from "@/modules/Files/Files.module.scss";
import useFilesStore from "@/modules/Files/useFilesStore";

const Navigation = () => {
  const [currentDir, setCurrentDir] = useFilesStore((store) => [
    store.currentDir,
    store.setCurrentDir,
  ]);
  const toPath = (indexPath) => {
    const splitedPath = currentDir
      .split("./")[1]
      .split("/")
      .filter((item) => item.length > 0);
    setCurrentDir(`./${splitedPath.slice(0, indexPath).join("/")}`);
  };
  return (
    <div className={styles.nav}>
      {currentDir
        .split("./")[1]
        .split("/")
        .filter((item) => item.length > 0)
        .map((dir, dirIndex) => {
          return (
            <div
              key={dirIndex}
              className={styles.navItem}
              onClick={() => toPath(dirIndex + 1)}
            >
              <div>{dir}</div>
              <span>/</span>
            </div>
          );
        })}
    </div>
  );
};

export default Navigation;
