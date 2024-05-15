import { Button } from "../components";
import { FaDatabase } from "react-icons/fa";

const ButtonPage = () => {
  const handleClick = () => {
    console.log("Clicked You !!");
  };

  const handleMouseEnter = () => {
    console.log("On Mouse Enter");
  };
  return (
    <>
      <div>
        <Button plain onClick={handleClick} className="my-2">
          <FaDatabase />
          Plain
        </Button>
      </div>
      <div>
        <Button primary onMouseEnter={handleMouseEnter} className="my-4">
          <FaDatabase />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <FaDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button success outline>
          <FaDatabase />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <FaDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button danger outline onClick={handleClick}>
          <FaDatabase />
          Danger
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
