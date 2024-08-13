import { useState } from "react";
import styles from "@/modules/Description/Description.module.scss";
import { Button, Input, SelectPicker } from "rsuite";
import PlusIcon from "@rsuite/icons/legacy/Plus";

const AddLineLog = ({ addLineLog, server, logId }) => {
  const [addType, setAddType] = useState("add");
  const [content, setAddContent] = useState("");
  const [contentAbout, setAddContentAbout] = useState("");
  return (
    <div className={styles.actions}>
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
        value={content}
        onChange={setAddContent}
        placeholder="Чё было сделано"
      ></Input>
      <Input
        value={contentAbout}
        onChange={setAddContentAbout}
        placeholder="Описание (Опционально)"
      ></Input>
      <Button
        appearance="primary"
        color="green"
        style={{ minWidth: "38px", minHeight: "36px" }}
        onClick={() => {
          if (!addLineLog(server, logId, addType, content, contentAbout)) {
            setAddType("add");
            setAddContent("");
            setAddContentAbout("");
          }
        }}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default AddLineLog;
