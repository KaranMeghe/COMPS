import { Dropdown } from "../components";

const DropdownPage = () => {
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
      <Dropdown options={options} />
    </div>
  );
};

export default DropdownPage;
