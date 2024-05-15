import { Buttons } from "./components";
import { FaDatabase } from "react-icons/fa";
function App() {
  return (
    <>
      <div>
        <Buttons plain>
          <FaDatabase />
          Plain
        </Buttons>
      </div>

      <div>
        <Buttons primary>
          <FaDatabase />
          Primary
        </Buttons>
      </div>

      <div>
        <Buttons secondary rounded outline>
          <FaDatabase />
          Secondary
        </Buttons>
      </div>

      <div>
        <Buttons success outline>
          <FaDatabase />
          Success
        </Buttons>
      </div>

      <div>
        <Buttons warning>
          <FaDatabase />
          Warning
        </Buttons>
      </div>

      <div>
        <Buttons danger outline>
          <FaDatabase />
          Danger
        </Buttons>
      </div>
    </>
  );
}

export default App;
