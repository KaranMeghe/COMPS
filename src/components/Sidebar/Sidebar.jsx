import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="h-[100vh]">
      <div className="flex flex-col h-full justify-center bg-blue-400 text-white w-32 ">
        <Link
          to="/accordion"
          className="p-2 text-2xl border border-x-0 border-t-0 border-white cursor-pointer"
        >
          <h3>Accordion</h3>
        </Link>
        <Link
          to="/buttons"
          className="p-2 text-2xl border border-x-0 border-t-0 border-white cursor-pointer"
        >
          <h3> Button</h3>
        </Link>
        <Link
          to="/dropdown"
          className="p-2 text-2xl border border-x-0 border-t-0 border-white cursor-pointer"
        >
          <h3>Dropdown</h3>
        </Link>
        <Link
          to="/modal"
          className="p-2 text-2xl border border-x-0 border-t-0 border-white cursor-pointer"
        >
          <h3>Modal</h3>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
