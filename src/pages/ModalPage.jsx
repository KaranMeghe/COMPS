import { useState } from "react";
import { Button, Modal } from "../components";

const ModalPage = () => {
  const [showMoadal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showMoadal);
  };

  const handleClose = () => {
    setShowModal(!showMoadal);
  };

  const actionBar = (
    <div>
      <Button primary outline onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is Terms & Conditions before you continue</p>
    </Modal>
  );
  return (
    <div>
      <Button primary outline onClick={handleClick}>
        Click Me
      </Button>
      {showMoadal && modal}
    </div>
  );
};

export default ModalPage;
