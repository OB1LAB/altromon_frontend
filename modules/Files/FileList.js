import styles from "@/modules/Files/Files.module.scss";
import { useEffect, useState } from "react";
import useFilesStore from "@/modules/Files/useFilesStore";

const getFolders = (currentDir, files) => {
  const addded = {};
  const newFiles = [];
  files
    .filter((item) => item.path.includes(currentDir))
    .forEach((file) => {
      const fileName = file.path.split(`${currentDir}/`)[1].split("/")[0];
      if (!Object.keys(addded).includes(fileName)) {
        newFiles.push({
          ...file,
          name: fileName,
          size: `${(file.size / 1024 / 1024).toFixed(2)} МБ`,
          isFile:
            file.path
              .split(currentDir)[1]
              .split("/")
              .filter((item) => item.length > 0).length === 1,
        });
        addded[fileName] = {
          size: file.size,
          fileIndex: newFiles.length - 1,
        };
      } else {
        addded[fileName].size += file.size;
        newFiles[addded[fileName].fileIndex].size =
          `${(addded[fileName].size / 1024 / 1024).toFixed(2)} МБ`;
      }
    });
  return newFiles.sort((a, b) =>
    a.isFile === b.isFile ? 0 : a.isFile ? 1 : -1,
  );
};

const FileList = ({ selectedFile, setSelectedFile }) => {
  const files = useFilesStore((store) => store.files);
  const [viewedFiles, setViewedFiles] = useState([]);
  const [currentDir, setCurrentDir] = useFilesStore((store) => [
    store.currentDir,
    store.setCurrentDir,
  ]);
  useEffect(() => {
    setViewedFiles(getFolders(currentDir, files));
  }, [files, currentDir]);
  return (
    <div className={styles.files}>
      {viewedFiles.map((file) => {
        return (
          <button
            key={file.name}
            className={file.name === selectedFile ? styles.selected : ""}
            onClick={() => {
              if (!file.isFile) {
                setSelectedFile("");
                setCurrentDir(`${currentDir}/${file.name}`);
              } else {
                if (file.name === selectedFile) {
                  setSelectedFile("");
                } else {
                  setSelectedFile(file.name);
                }
              }
            }}
          >
            <div>{file.name}</div>
            <div>{file.size}</div>
          </button>
        );
      })}
    </div>
  );
};

export default FileList;
