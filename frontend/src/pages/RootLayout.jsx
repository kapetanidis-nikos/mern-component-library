import Sidebar from "../components/Navigation/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    // TODO add aside, main, header, footer
    // TODO sidebar shouldnt the main contents to the right
    <div className="flex bg-slate-100 ">
      <Sidebar />
      <div className="flex w-full justify-center items-center bg-slate-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
