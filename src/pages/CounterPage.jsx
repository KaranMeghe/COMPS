import { Button } from "../components";
import { useCounter } from "../hooks";

const CounterPage = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount);
  return (
    <section>
      <div>
        <p>count value is : {count}</p>
        <Button outline primary onClick={increment}>
          ++ Increment Count
        </Button>
      </div>
    </section>
  );
};

export default CounterPage;
