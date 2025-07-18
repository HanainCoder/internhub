import React from 'react';

const InputField = ({label,type='text',name,placeholder}) =>(
    <div className='mb-4'>
        <label htmlFor="{name}" className='block text-sm font-medium text-gray-700 mb-1'>
            {label}
        </label>

        <input
        type ={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none'
        />
        
    </div>
);
export default InputField;