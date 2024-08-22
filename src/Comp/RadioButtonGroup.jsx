import React from 'react';
import RadioButton from './RadioButton';

const RadioButtonGroup = ({ name, options, onSelectionChange, selectedFilter }) => {
  const handleChange = (e) => {
    const { id } = e.target;
    onSelectionChange(id);
  };

  return (
    <div>
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          name={name}
          label={option.label}
          checked={selectedFilter === option.id}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
