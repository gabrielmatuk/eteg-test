import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  maxlength?: number;
  onChange: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
  maxlength
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        value={value}
        maxLength={maxlength}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormField;