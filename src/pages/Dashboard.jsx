import { motion } from 'framer-motion';
import { Briefcase, Users, CheckCircle, Sparkles } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'January', applicants: 50 },
  { name: 'February', applicants: 40 },
  { name: 'March', applicants: 90 },
  { name: 'April', applicants: 100 },
];

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-br from-[#F9FAFB] via-white to-[#E5E7EB] font-[Inter,DM Sans,sans-serif]">
      {/* Header */}
      <motion.div
        className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto mb-8 sm:mb-10 border border-indigo-200"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4F46E5] mb-2 flex items-center gap-2">
          <Sparkles className="text-[#F59E0B]" />
          Welcome to InternHub, Hanain
        </h1>
        <p className="text-gray-700 text-sm sm:text-base">
          Manage internships, track applicants, and find the perfect candidates in one place.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {[
          {
            title: 'Internships Posted',
            count: 12,
            icon: <Briefcase className="text-[#4F46E5]" />,
          },
          {
            title: 'Applicants',
            count: 342,
            icon: <Users className="text-[#F59E0B]" />,
          },
          {
            title: 'Shortlisted',
            count: 29,
            icon: <CheckCircle className="text-green-600" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-200 flex flex-col items-start gap-3 hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-3xl sm:text-4xl">{item.icon}</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#4F46E5]">{item.count}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <motion.div
        className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-indigo-100 mt-8 sm:mt-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2 className="text-lg sm:text-xl font-semibold text-[#4F46E5] mb-4">Applicants Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#e5e7eb" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="applicants" stroke="#4F46E5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Progress */}
      <motion.div
        className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-indigo-100 mt-8 sm:mt-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h2 className="text-lg sm:text-xl font-semibold text-[#4F46E5] mb-4">Hiring Progress</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700">Internships Filled (75%)</p>
            <div className="w-full bg-indigo-100 h-4 rounded-full">
              <div className="bg-[#4F46E5] h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }} />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Applications Reviewed (60%)</p>
            <div className="w-full bg-indigo-100 h-4 rounded-full">
              <div className="bg-[#F59E0B] h-4 rounded-full transition-all duration-1000" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
