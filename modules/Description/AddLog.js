import styles from "@/modules/Description/Description.module.scss";
import { Button, Input, SelectPicker } from "rsuite";
import PlusIcon from "@rsuite/icons/legacy/Plus";
import { useState } from "react";
import useDescriptionStore from "@/modules/Description/useDescriptionStore";

const AddLog = ({ selectedServer }) => {
  const addLog = useDescriptionStore((store) => store.addLog);
  const [addDate, setAddDate] = useState("");
  const [addType, setAddType] = useState("add");
  const [addContent, setAddContent] = useState("");
  const [addContentAbout, setAddContentAbout] = useState("");
  return (
    <div className={styles.addLog}>
      <div className={styles.date}>
        <Input
          placeholder="День"
          style={{ width: "100px" }}
          value={addDate}
          onChange={setAddDate}
        ></Input>
        <Button
          onClick={() => {
            if (
              !addLog(
                selectedServer,
                addDate,
                addType,
                addContent,
                addContentAbout,
              )
            ) {
              setAddDate("");
              setAddType("add");
              setAddContent("");
              setAddContentAbout("");
            }
          }}
          appearance="primary"
          color="green"
        >
          <PlusIcon />
        </Button>
      </div>
      <div className={styles.data}>
        <SelectPicker
          value={addType}
          onChange={setAddType}
          cleanable={false}
          searchable={false}
          style={{ minWidth: "100px" }}
          data={[
            {
              label: "add",
              value: "add",
            },
            {
              label: "edit",
              value: "edit",
            },
            { label: "remove", value: "remove" },
          ]}
        />
        <Input
          placeholder="Чё было сделано"
          value={addContent}
          onChange={setAddContent}
        ></Input>
        <Input
          placeholder="Описание (Опционально)"
          value={addContentAbout}
          onChange={setAddContentAbout}
        ></Input>
      </div>
    </div>
  );
};

export default AddLog;
