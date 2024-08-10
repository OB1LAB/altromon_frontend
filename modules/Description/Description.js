"use client";
import useDescriptionStore from "@/modules/Description/useDescriptionStore";
import { useEffect, useState } from "react";
import { Button, Input, SelectPicker } from "rsuite";
import styles from "./Description.module.scss";
import Log from "@/modules/Description/Log";
import AddLog from "@/modules/Description/AddLog";

const Description = () => {
  const [selectedServer, setSelectedServer] = useState("Hitech_1.12.2_forge");
  const description = useDescriptionStore((store) => store.description);
  const setAbout = useDescriptionStore((store) => store.setAbout);
  const setMods = useDescriptionStore((store) => store.setMods);
  const save = useDescriptionStore((store) => store.save);
  const get = useDescriptionStore((store) => store.get);
  useEffect(() => {
    get();
  }, []);
  return (
    <div className={styles.description}>
      <SelectPicker
        value={selectedServer}
        onChange={setSelectedServer}
        searchable={false}
        cleanable={false}
        data={Object.keys(description).map((server) => {
          return {
            label: server,
            value: server,
          };
        })}
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
