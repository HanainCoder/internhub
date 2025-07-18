import { BellIcon, Sun, Moon } from 'lucide-react';
import { useContext } from 'react';
import RealTimeDate from '../components/RealTimeDate';



const Topbar = ({ toggleSidebar }) => {
  // const { darkMode, toggleTheme } = useContext(ThemeContext);


  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 border-b border-indigo-100 shadow-md transition-colors duration-300">
    <div className="flex items-center gap-4">
  {/* Mobile Hamburger */}
  <button onClick={toggleSidebar} className="lg:hidden text-gray-700 dark:text-white">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  {/* Date */}
  <RealTimeDate />
</div>


      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative group cursor-pointer">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 transition-colors duration-200" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-white animate-ping" />
        </div>

        {/* Dark Mode Toggle */}
        {/* <button onClick={toggleTheme} className="focus:outline-none">
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )} */}
        {/* </button> */}

        {/* Avatar */}
        <div className="flex items-center gap-3">
          <img
            src="/hanain-removebg-preview (1).png"
            alt="Hanain"
            className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800 dark:text-white">Hanain</span>
            <span className="text-xs text-gray-500 dark:text-gray-300">Intern</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
