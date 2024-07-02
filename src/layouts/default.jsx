import { Outlet } from "react-router-dom";
import { Video } from "lucide-react";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-100">
      <Outlet />
    </main>
  );
};

export default Layout;
