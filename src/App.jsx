import { Button } from "./components";
import { FaDatabase } from "react-icons/fa";
function App() {
  return (
    <>
      <div>
        <Button plain>
          <FaDatabase />
          Plain
        </Button>
      </div>

      <div>
        <Button primary>
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
        <Button danger outline>
          <FaDatabase />
          Danger
        </Button>
      </div>
    </>
  );
}

export default App;
