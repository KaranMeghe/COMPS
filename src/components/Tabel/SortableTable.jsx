import { Tabel } from "../index";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const SortableTable = (props) => {
  const { config, data } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
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
          className="bg-red-500 p-2 text-white"
        >
          {column.label} is SortableTable
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
  return (
    <div>
      {sortBy} - {sortOrder}
      <Tabel {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

export default SortableTable;
