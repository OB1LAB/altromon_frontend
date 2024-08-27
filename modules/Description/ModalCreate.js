import { Button, Input, Modal } from "rsuite";
import { useState } from "react";
import useDescriptionStore from "@/modules/Description/useDescriptionStore";

const ModalCreate = ({ open, setOpen, setSelectedServer }) => {
  const addServer = useDescriptionStore((store) => store.addServer);
  const [serverName, setServerName] = useState("");
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Modal.Header>
        <Modal.Title>Добавление сервера</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          placeholder="Название папки в %appdata%"
          value={serverName}
          onChange={setServerName}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            if (serverName.length === 0) {
              return;
            }
            setOpen(false);
            setTimeout(() => {
              addServer(serverName);
              setSelectedServer(serverName);
              setServerName("");
            }, 400);
          }}
          appearance="primary"
        >
          Создать
        </Button>
        <Button onClick={() => setOpen(false)} appearance="primary" color="red">
          Отмена
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreate;
