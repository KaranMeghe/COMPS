import { useReducer } from "react";
import { Button, Panel } from "../components";
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  CHANGE_INPUT,
  ADD_TO_INPUT,
} from "../config";

const CounterPage = ({ initialCount }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };

      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };

      case CHANGE_INPUT:
        return {
          ...state,
          valueToAdd: action.payload,
        };

      case ADD_TO_INPUT:
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
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value) || 0;
    dispatch({
      type: CHANGE_INPUT,
      payload: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TO_INPUT,
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
