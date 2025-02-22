import React from "react";

const FormInput = ({ label, id, name, type = "text", required = false, autoComplete, inputMode, pattern }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      autoComplete={autoComplete}
      inputMode={inputMode}
      pattern={pattern}
      className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
    />
  </div>
);

export default FormInput;