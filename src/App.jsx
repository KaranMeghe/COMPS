import { Button } from "./components";
import { FaDatabase } from "react-icons/fa";
function App() {
  const handleClick = () => {
    console.log("Clicked You !!");
  };

  const handleMouseEnter = () => {
    console.log("On Mouse Enter");
  };

  return (
    <>
      <div>
        <Button plain onClick={handleClick}>
          <FaDatabase />
          Plain
        </Button>
      </div>

      <div>
        <Button primary onMouseEnter={handleMouseEnter}>
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
}

export default App;
