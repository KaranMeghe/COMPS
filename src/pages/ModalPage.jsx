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
  return (
    <div>
      <Button primary outline onClick={handleClick}>
        Click Me
      </Button>
      {showMoadal && <Modal onClose={handleClose} />}
    </div>
  );
};

export default ModalPage;
