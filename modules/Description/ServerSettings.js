import styles from "./Description.module.scss";
import { Button, Input, SelectPicker, Toggle } from "rsuite";
import useDescriptionStore from "@/modules/Description/useDescriptionStore";
import { useState } from "react";
const ServerSettings = ({ selectedServer, setSelectedServer }) => {
  const [delInput, setDelInput] = useState("");
  const description = useDescriptionStore((store) => store.description);
  const files = useDescriptionStore((store) => store.files);
  const setName = useDescriptionStore((store) => store.setName);
  const setClient = useDescriptionStore((store) => store.setClient);
  const setJdkVersion = useDescriptionStore((store) => store.setJdkVersion);
  const setIsMods = useDescriptionStore((store) => store.setIsMods);
  const setCmd = useDescriptionStore((store) => store.setCmd);
  const deleteServer = useDescriptionStore((store) => store.deleteServer);
  return (
    <div className={styles.settings}>
      <div className={styles.presettings}>
        <Input
          placeholder="Название сервера"
          value={description[selectedServer].name}
          onChange={(value) => setName(selectedServer, value)}
        />
        <SelectPicker
          data={files}
          value={description[selectedServer].jdkVersion}
          onChange={(value) => setJdkVersion(selectedServer, value)}
          searchable={false}
          placeholder="jdk"
        />
        <SelectPicker
          data={files}
          onChange={(value) => setClient(selectedServer, value)}
          value={description[selectedServer].client}
          searchable={false}
          placeholder="Клиент"
        />
        <Toggle
          checked={description[selectedServer].isMods}
          onChange={(value) => setIsMods(selectedServer, value)}
          className={styles.toggle}
        >
          Модовый
        </Toggle>
        <Button
          appearance="primary"
          color="red"
          disabled={delInput !== "777x"}
          onClick={() => {
            deleteServer(selectedServer);
            setSelectedServer(
              Object.keys(description).filter(
                (item) => item !== selectedServer,
              )[0],
            );
          }}
        >
          Удалить
        </Button>
        <Input
          placeholder="Для удаления 777x"
          value={delInput}
          onChange={setDelInput}
        />
      </div>
      <Input
        as="textarea"
        placeholder="Команда запуска"
        value={description[selectedServer].cmd}
        onChange={(value) => setCmd(selectedServer, value)}
        style={{ minHeight: "200px" }}
      />
    </div>
  );
};

export default ServerSettings;
