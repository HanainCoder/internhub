import { FaTachometerAlt, FaUsers, FaBriefcase, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const navItems = [
  { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/dashboard' },
  { name: 'Candidates', icon: <FaUsers />, path: '/dashboard/candidates' },
  { name: 'Internships', icon: <FaBriefcase />, path: '/dashboard/internships' },
  { name: 'Profile', icon: <FaUser />, path: '/dashboard/profile' },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  return  (
    <>
      {/* Background  */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="lg:hidden fixed inset-0 bg-white bg-opacity-20 z-40"
        />
      )}

      <aside
        className={clsx(
          'fixed z-50 top-0 left-0 w-64 h-full bg-[#EEF2FF] text-indigo-700 shadow-xl flex flex-col p-6 space-y-8 font-["Inter"] transform transition-transform duration-300 lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center gap-3">
          <img
             src={`${import.meta.env.BASE_URL}assets/internhub.png`}
            alt="InternHub Logo"
            className="w-18 h-18 rounded-md shadow"
          />
          <h2 className="text-2xl font-bold">InternHub Portal</h2>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeSidebar}
              className={clsx(
                'flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-indigo-100 hover:scale-[1.02]',
                location.pathname === item.path && 'bg-indigo-200 shadow-inner'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-base font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto text-sm text-gray-500">
          &copy; {new Date().getFullYear()} UO Internship Portal
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
