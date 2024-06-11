import { useState } from "react";
import { Button, Panel } from "../components";

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);
  console.log(typeof count, typeof valueToAdd);

  const increment = () => {
    return setCount(count + 1);
  };

  const decrement = () => {
    return setCount(count - 1);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const value = Number(e.target.value) || 0;
    setValueToAdd(value);
    setCount(count + Number(valueToAdd));
  };

  return (
    <section>
      <Panel className="m-3">
        <p>count value is : {count}</p>
        <div className="flex">
          <Button outline primary onClick={increment}>
            ++ Increment Count
          </Button>

          <Button outline primary onClick={decrement}>
            -- Decrement Count
          </Button>
        </div>

        <form onSubmit={handleForm}>
          <label>Add a lot</label>
          <input
            type="number"
            className="p-1 m-3 bg-gray-50 border border-gray-300"
            value={valueToAdd || ""}
            onChange={(e) => setValueToAdd(e.target.value)}
          />
          <Button outline primary>
            Add it
          </Button>
        </form>
      </Panel>
    </section>
  );
};

export default CounterPage;
