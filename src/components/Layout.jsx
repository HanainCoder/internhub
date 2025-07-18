import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden font-['Inter']">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Topbar with toggle button */}
        <Topbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

        {/* main */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-[#F9FAFB] via-white to-[#E5E7EB] p-4 sm:p-6">
          <div className='max-w-6xl mx-auto w-full px-2 sm:px-4'>
          <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
