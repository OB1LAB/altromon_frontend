import styles from "@/modules/Description/Description.module.scss";
import { Button, Input, SelectPicker } from "rsuite";
import CloseIcon from "@rsuite/icons/legacy/Close";
import useDescriptionStore from "@/modules/Description/useDescriptionStore";

const LineLog = ({ line, selectedServer, dayId, lineId }) => {
  const setType = useDescriptionStore((store) => store.setType);
  const setContent = useDescriptionStore((store) => store.setContent);
  const setContentAbout = useDescriptionStore((store) => store.setContentAbout);
  const deleteLineDay = useDescriptionStore((store) => store.deleteLineDay);
  return (
    <div className={styles.actions}>
      <SelectPicker
        value={line.type}
        onChange={(value) => setType(selectedServer, value, dayId, lineId)}
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
        onChange={(value) => setContent(selectedServer, value, dayId, lineId)}
        value={line.content}
      ></Input>
      <Input
        value={line.about ? line.about : ""}
        onChange={(value) =>
          setContentAbout(selectedServer, value, dayId, lineId)
        }
        placeholder="Описание (Опционально)"
      ></Input>
      <Button
        appearance="primary"
        color="red"
        onClick={() => deleteLineDay(selectedServer, dayId, lineId)}
        style={{ minWidth: "38px", minHeight: "36px" }}
      >
        <CloseIcon />
      </Button>
    </div>
  );
};

export default LineLog;
