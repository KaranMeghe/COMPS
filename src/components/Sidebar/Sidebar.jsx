import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="h-[100vh]">
      <div className="flex flex-col h-full justify-center bg-blue-400 text-white w-32 ">
        <NavLink
          to="/accordion"
          className={({ isActive }) =>
            `p-2 text-2xl border border-x-0 border-t-0 border-white cursor-pointer ${
              isActive ? "text-gray-700" : "text-white"
            } hover:bg-gray-50  hover:text-gray-700`
          }
        >
          <h3>Accordion</h3>
        </NavLink>
        <NavLink
          to="/buttons"
          className={({ isActive }) =>
            `p-2 text-2xl border border-x-0 border-t-0 border-white cursor-pointer ${
              isActive ? "text-gray-700" : "text-white"
            } hover:bg-gray-50  hover:text-gray-700`
          }
        >
          <h3>Buttons</h3>
        </NavLink>
        <NavLink
          to="/dropdown"
          className={({ isActive }) =>
            `p-2 text-2xl border border-x-0 border-t-0 border-white cursor-pointer ${
              isActive ? "text-gray-700" : "text-white"
            } hover:bg-gray-50  hover:text-gray-700`
          }
        >
          <h3>Dropdown</h3>
        </NavLink>
        <NavLink
          to="/accordion"
          className={({ isActive }) =>
            `p-2 text-2xl border border-x-0 border-t-0 border-white cursor-pointer ${
              isActive ? "text-gray-700" : "text-white"
            } hover:bg-gray-50  hover:text-gray-700`
          }
        >
          <h3>Modal</h3>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
