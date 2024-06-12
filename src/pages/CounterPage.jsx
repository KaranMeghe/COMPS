import { useReducer } from "react";
import { Button, Panel } from "../components";

const CounterPage = ({ initialCount }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };

      case "decrement":
        return {
          ...state,
          count: state.count - 1,
        };

      case "changeInput":
        return {
          ...state,
          valueToAdd: action.payload,
        };

      case "addToCount":
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: "increment",
    });
  };

  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value) || 0;
    dispatch({
      type: "changeInput",
      payload: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "addToCount",
    });
  };

  return (
    <section>
      <Panel className="m-3">
        <p>count value is : {state.count}</p>
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
            value={state.valueToAdd || ""}
            onChange={handleInputChange}
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
