"use client";
import useDescriptionStore from "@/modules/Description/useDescriptionStore";
import { useEffect, useState } from "react";
import { Button, Input, SelectPicker } from "rsuite";
import styles from "./Description.module.scss";
import Log from "@/modules/Description/Log";
import AddLog from "@/modules/Description/AddLog";
import ServerSettings from "@/modules/Description/ServerSettings";
import ModalCreate from "@/modules/Description/ModalCreate";

const Description = () => {
  const [open, setOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState("");
  const description = useDescriptionStore((store) => store.description);
  const setAbout = useDescriptionStore((store) => store.setAbout);
  const setMods = useDescriptionStore((store) => store.setMods);
  const save = useDescriptionStore((store) => store.save);
  const get = useDescriptionStore((store) => store.get);
  const getFiles = useDescriptionStore((store) => store.getFiles);
  useEffect(() => {
    get();
    getFiles();
  }, []);
  useEffect(() => {
    if (!Object.keys(description).includes(selectedServer)) {
      setSelectedServer(Object.keys(description)[0]);
    }
  }, [description]);
  if (selectedServer === "") {
    return <div>Загрузка</div>;
  }
  return (
    <div className={styles.description}>
      <Button color="green" appearance="primary" onClick={() => setOpen(true)}>
        Создать
      </Button>
      <ModalCreate
        open={open}
        setOpen={setOpen}
        setSelectedServer={setSelectedServer}
      />
      <SelectPicker
        value={selectedServer}
        onChange={setSelectedServer}
        searchable={false}
        cleanable={false}
        data={Object.keys(description).map((server) => {
          return {
            label: description[server].name,
            value: server,
          };
        })}
      />
      <ServerSettings
        selectedServer={selectedServer}
        setSelectedServer={setSelectedServer}
      />
      <Input
        as="textarea"
        value={description[selectedServer].about}
        onChange={(value) => setAbout(selectedServer, value)}
        style={{ minHeight: "70px" }}
      />
      <Input
        as="textarea"
        value={description[selectedServer].mods}
        onChange={(value) => setMods(selectedServer, value)}
        style={{ minHeight: "400px" }}
      />
      <AddLog selectedServer={selectedServer} />
      <div className={styles.changeLog}>
        {description[selectedServer].changeLog.map((day, dayId) => {
          return (
            <Log
              key={dayId}
              day={day}
              dayId={dayId}
              selectedServer={selectedServer}
            />
          );
        })}
      </div>
      <div className={styles.buttons}>
        <Button appearance="primary" color="red" onClick={get}>
          Отмена
        </Button>
        <Button appearance="primary" color="green" onClick={save}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default Description;
