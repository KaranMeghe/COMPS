import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex items-baseline gap-x-5">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
