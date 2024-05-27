import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    expandedIndex === nextIndex
      ? setExpandedIndex(-1)
      : setExpandedIndex(nextIndex);
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <FaChevronDown /> : <FaChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          onClick={() => {
            handleClick(index);
          }}
          className="flex justify-between p-3 bg-gray-50 border-b cursor-pointer "
        >
          <h3>{item.label}</h3>
          {icon}
        </div>

        {isExpanded && (
          <div className="border-b p-5">
            <p>{item.content}</p>
          </div>
        )}
      </div>
    );
  });

  return <div className="border-x border-t w-[70%] ">{renderItems}</div>;
};

export default Accordion;
