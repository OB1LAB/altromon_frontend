"use client";
import useFilesStore from "@/modules/Files/useFilesStore";
import { useEffect, useState } from "react";
import styles from "./Files.module.scss";
import Navigation from "@/modules/Files/Navigation";
import FileList from "@/modules/Files/FileList";
import FileButtons from "@/modules/Files/FileButtons";

const Files = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const getFiles = useFilesStore((store) => store.getFiles);
  useEffect(() => {
    getFiles();
  }, []);
  return (
    <div className={styles.page}>
      <Navigation />
      <FileList selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
      <FileButtons
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
    </div>
  );
};

export default Files;
