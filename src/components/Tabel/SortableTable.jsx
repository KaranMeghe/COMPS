import { Tabel } from "../index";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const SortableTable = (props) => {
  const { config, data } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("dsc");
      setSortBy(label);
    } else if (sortOrder === "dsc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => handleClick(column.label)}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex gap-2 items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }
  return <Tabel {...props} data={sortedData} config={updatedConfig} />;

  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <AiFillCaretUp /> <AiFillCaretDown />
        </div>
      );
    }

    if (sortOrder === null) {
      return (
        <div>
          <AiFillCaretUp /> <AiFillCaretDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <AiFillCaretUp />
        </div>
      );
    } else if (sortOrder === "dsc") {
      return <AiFillCaretDown />;
    }
  }
};

export default SortableTable;
