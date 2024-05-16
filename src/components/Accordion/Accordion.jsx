import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    return setExpandedIndex(nextIndex);
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;

    return (
      <div key={item.id}>
        <div
          onClick={() => {
            handleClick(index);
          }}
        >
          <h3>{item.label}</h3>
        </div>

        {isExpanded && (
          <div>
            <p>{item.content}</p>
          </div>
        )}
      </div>
    );
  });

  return <div>{renderItems}</div>;
};

export default Accordion;
