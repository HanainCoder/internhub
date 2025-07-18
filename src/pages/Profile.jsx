import React, { useState } from 'react';
import { UserCircle, ShieldCheck } from 'lucide-react';

const Profile = () => {
  const user = {
    name: "Muhammad Hanain",
    email: "m.hanainehsanpk@gmail.com",
    role: "Admin",
  };

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.currentPassword) newErrors.currentPassword = 'Current password is required.';
    if (!formData.newPassword) newErrors.newPassword = 'New password is required.';
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password.';
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('✅ Password updated successfully!');
    setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4 sm:px-6 py-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg font-['Inter'] space-y-10">
      
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
        <UserCircle className="w-20 h-20 text-indigo-600 dark:text-indigo-400" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-white">{user.name}</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{user.email}</p>
          <div className="inline-flex items-center mt-2 text-xs sm:text-sm px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-100 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 mr-1" /> {user.role}
          </div>
        </div>
      </div>

      {/* Change Password Form */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">Change Password</h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 transition"
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm mt-2">{errors.currentPassword}</p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 transition"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-2">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 transition"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-4">Recent Activity</h3>
        <ul className="space-y-3">
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <span className="text-sm text-gray-700 dark:text-gray-200">Logged in from Chrome on Windows</span>
            <span className="text-xs text-gray-400 mt-2 sm:mt-0">2 hours ago</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <span className="text-sm text-gray-700 dark:text-gray-200">Changed password</span>
            <span className="text-xs text-gray-400 mt-2 sm:mt-0">1 day ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
