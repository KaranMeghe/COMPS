import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

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
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
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
    <div className="w-48 relative cursor-pointer m-2">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.color || "Select..."}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
