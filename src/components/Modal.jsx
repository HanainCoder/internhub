// /components/Modal.jsx
import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-2 sm:p-6 overflow-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-5 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
