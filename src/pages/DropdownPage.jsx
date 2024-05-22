import { useState } from "react";
import { Dropdown } from "../components";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { color: "Red", value: "red" },
    { color: "Orange", value: "orange" },
    { color: "Yellow", value: "yellow" },
    { color: "Brown", value: "brown" },
    { color: "Green", value: "green" },
    { color: "Pink", value: "pink" },
  ];
  return (
    <div>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
};

export default DropdownPage;
