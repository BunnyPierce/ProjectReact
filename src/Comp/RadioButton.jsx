import React from 'react';

const RadioButton = ({ id, name, label, checked, onChange }) => {
  return (
    <div className="flex items-center h-5 mb-5">
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-600">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
