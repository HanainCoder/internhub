import React, { useState } from 'react';

const InternshipModal = ({ close, addInternship }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    department: '',
    duration: '',
    stipend: '',
    status: 'Open',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.department.trim()) newErrors.department = 'Department is required';

    if (!form.duration) {
      newErrors.duration = 'Duration is required';
    } else if (Number(form.duration) <= 0) {
      newErrors.duration = 'Duration must be a positive number';
    }

    if (!form.stipend && form.stipend !== 0) {
      newErrors.stipend = 'Stipend is required';
    } else if (Number(form.stipend) < 0) {
      newErrors.stipend = 'Stipend must be zero or more';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      addInternship({ id: Date.now(), ...form });
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">🎯 Post New Internship</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-sm font-medium text-gray-700">

          {/* Title */}
          <div>
            <input
              name="title"
              placeholder="Internship Title"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                errors.title ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-indigo-500'
              }`}
              onChange={handleChange}
              value={form.title}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description (optional)"
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={form.description}
          />

          {/* Department */}
          <div>
            <input
              name="department"
              placeholder="Department"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                errors.department ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-indigo-500'
              }`}
              onChange={handleChange}
              value={form.department}
            />
            {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
          </div>

          {/* Duration */}
          <div>
            <input
              name="duration"
              placeholder="Duration (weeks)"
              type="number"
              min="1"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                errors.duration ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-indigo-500'
              }`}
              onChange={handleChange}
              value={form.duration}
            />
            {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}
          </div>

          {/* Stipend */}
          <div>
            <input
              name="stipend"
              placeholder="Stipend"
              type="number"
              min="0"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                errors.stipend ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-indigo-500'
              }`}
              onChange={handleChange}
              value={form.stipend}
            />
            {errors.stipend && <p className="text-red-500 text-xs mt-1">{errors.stipend}</p>}
          </div>

          {/* Status Dropdown */}
          <select
            name="status"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={form.status}
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={close}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InternshipModal;
