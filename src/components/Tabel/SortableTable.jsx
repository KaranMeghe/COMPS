import { Tabel } from "../index";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useSort } from "../../hooks";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortedData, sortBy, sortOrder, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => setSortColumn(column.label)}
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
