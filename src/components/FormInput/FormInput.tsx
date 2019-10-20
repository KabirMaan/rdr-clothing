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
  ...otherProps
}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${value.length ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
