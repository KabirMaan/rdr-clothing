import React from "react";
import "./FormInput.scss";

interface FormInputProps {
  label?: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
  required?: boolean;
}
const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  value,
  required,
  name
}) => {
  return (
    <div className="form-input">
      <input
        className="form-input__handler"
        onChange={handleChange}
        name={name}
        required={required}
        value={value}
      />
      {label && (
        <label className={`${value.length ? "shrink" : ""} form-input__label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
