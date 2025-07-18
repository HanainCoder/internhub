import React, { useState } from 'react';
import InputField from '../components/InputField';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formValues.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formValues.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#EEF2FF] flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8 font-inter">
      <div className="bg-white w-full max-w-md px-6 py-8 sm:p-10 rounded-2xl shadow-xl">
        <div className="text-center mb-6">
          <img
            src="public/internhub.png"
            alt="Company Logo"
            className="mx-auto w-22 h-22 mb-3"
          />
          <h2 className="text-3xl font-bold text-indigo-600">Interhub Login</h2>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="youracc@example.com"
              className={`w-full px-4 py-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="......"
                className={`w-full px-4 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 transition-transform duration-300 hover:scale-105"
          >
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
