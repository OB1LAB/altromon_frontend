import styles from "@/modules/Files/Files.module.scss";
import { Button, Input } from "rsuite";
import { useState } from "react";
import useFilesStore from "@/modules/Files/useFilesStore";

const FileButtons = ({ selectedFile, setSelectedFile }) => {
  const [confirm, setConfirm] = useState("");
  const [uploadFile, removeFile] = useFilesStore((store) => [
    store.uploadFile,
    store.removeFile,
  ]);
  const currentFolder = useFilesStore((store) => store.currentFolder);
  return (
    <div className={styles.buttons}>
      <label
        htmlFor="file"
        className={`rs-btn rs-btn-primary rs-btn-green ${styles.upload}`}
      >
        Загрузить файл
      </label>
      <input
        id="file"
        type="file"
        hidden
        onChange={(event) => uploadFile(event)}
      />
      <Button
        appearance="primary"
        color="red"
        className={styles.delete}
        disabled={confirm !== "777x"}
        onClick={() => {
          removeFile(
            currentFolder.join("/") +
              (selectedFile.length > 0 ? `/${selectedFile}` : ""),
          );
          setConfirm("");
          setSelectedFile("");
        }}
      >
        Удалить текущую директорию/Файл
      </Button>
      <Input
        value={confirm}
        onChange={setConfirm}
        placeholder="777x для удаления"
        className={styles.confirm}
      />
    </div>
  );
};

export default FileButtons;
