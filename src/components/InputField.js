import React from "react";
import "./InputField.css";

const InputField = ({ label, type, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default InputField;
