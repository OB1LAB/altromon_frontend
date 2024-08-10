import styles from "@/modules/Description/Description.module.scss";
import { Button, Input } from "rsuite";
import CloseIcon from "@rsuite/icons/legacy/Close";
import LineLog from "@/modules/Description/LineLog";
import AddLineLog from "@/modules/Description/AddLineLog";
import useDescriptionStore from "@/modules/Description/useDescriptionStore";

const Log = ({ selectedServer, dayId, day }) => {
  const setDate = useDescriptionStore((store) => store.setDate);
  const deleteDay = useDescriptionStore((store) => store.deleteDay);
  const addLineLog = useDescriptionStore((store) => store.addLineLog);
  return (
    <div className={styles.log}>
      <div className={styles.dateChange}>
        <Input
          onChange={(value) => setDate(selectedServer, value, dayId)}
          style={{ width: "100px" }}
          value={day.date}
        ></Input>
        <Button
          onClick={() => deleteDay(selectedServer, dayId)}
          appearance="primary"
          color="red"
        >
          <CloseIcon />
        </Button>
      </div>
      <div className={styles.date}>
        {day.actions.map((line, lineId) => {
          return (
            <LineLog
              key={lineId}
              selectedServer={selectedServer}
              dayId={dayId}
              lineId={lineId}
              line={line}
            />
          );
        })}
        <AddLineLog
          addLineLog={addLineLog}
          server={selectedServer}
          logId={dayId}
        />
      </div>
    </div>
  );
};

export default Log;
