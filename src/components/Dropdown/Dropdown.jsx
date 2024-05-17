import { useState } from "react";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  const renderOptions = options.map((option) => {
    return (
      <div
        onClick={() => {
          handleOptionClick(option);
        }}
        key={option.value}
      >
        {isOpen && <div>{option.color}</div>}
      </div>
    );
  });

  return (
    <div className="cursor-pointer">
      <div onClick={handleClick}>{value?.color || "Select..."}</div>
      {renderOptions}
    </div>
  );
};

export default Dropdown;
