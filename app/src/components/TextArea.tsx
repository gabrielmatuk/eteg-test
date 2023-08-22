import React from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const FixedHeightTextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        height: '100px',
        resize: 'none',
      }}
    />
  );
};

export default FixedHeightTextArea;