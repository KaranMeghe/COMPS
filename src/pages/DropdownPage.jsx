import { useState } from "react";
import { Dropdown } from "../components";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { color: "red", value: "red" },
    { color: "orange", value: "orange" },
    { color: "yellow", value: "yellow" },
    { color: "brown", value: "brown" },
    { color: "green", value: "green" },
    { color: "pink", value: "pink" },
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
